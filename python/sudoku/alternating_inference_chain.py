MAX_SEARCH_DEPTH = 15
MIN_SEARCH_DEPTH = 2

#get the numbers that are in the same row col or box of a cell
def getSeeingCells(row, col):
    #initialize peers as a list will convert to a set later
    peers_list = []

    #add cells in the same row and column
    for i in range(9):
        peers_list.append((row, i))
        peers_list.append((i, col))

    boxRow = (row // 3) * 3
    boxCol = (col // 3) * 3

    #add cells in the same 3x3 box
    for i in range(boxRow, boxRow + 3):
        for j in range(boxCol, boxCol + 3):
            peers_list.append((i, j))

    #convert the list to a set to remove duplicates and then remove the cell itself
    peers = set(peers_list)
    peers.discard((row, col))
    return peers


#creates the possible candidates for each cell based on the puzzle
def makePossibilityPuzzle(puzzle):
    possibilities = {}
    #create a set of numbers 1 to 9
    numbers = set()
    for n in range(1, 10):
        numbers.add(n)

    #initialize all possibilities
    for row in range(9):
        for col in range(9):
            if puzzle[row][col] is None:
                possibilities[(row, col)] = numbers.copy()
            else:
                possibilities[(row, col)] = {puzzle[row][col]}

    #eliminate possibilities based on solved cells
    for row in range(9):
        for col in range(9):
            value = puzzle[row][col]
            if value is not None:
                for peerCell in getSeeingCells(row, col):
                    peerRow, peerCol = peerCell[0], peerCell[1]

                    #check if the cell is in the possibilities map and is not a solved cell (len > 1)
                    if (peerRow, peerCol) in possibilities and len(possibilities[(peerRow, peerCol)]) > 1:
                        #remove the value
                        possibilities[(peerRow, peerCol)].discard(value)
    return possibilities


#given the number of a cell find any bilocation candidates to start search from
def getBilocation(possibilities, row, col, num):
    locations = []

    #check row
    for i in range(9):
        #use .get() with an empty set as default to avoid a keyerror - gemini helped me with this
        if num in possibilities.get((row, i), set()):
            locations.append((row, i))

    if len(locations) == 2 and (row, col) in locations:
        peerCell = locations[0]
        if locations[1] == (row, col):
            peerCell = locations[0]
        else:
            peerCell = locations[1]
        return (num, peerCell)

    locations = []

    #check column
    for i in range(9):
        if num in possibilities.get((i, col), set()):
            locations.append((i, col))

    if len(locations) == 2 and (row, col) in locations:
        peerCell = locations[0]
        if locations[1] == (row, col):
            peerCell = locations[0]
        else:
            peerCell = locations[1]
        return (num, peerCell)

    locations = []

    #check box
    boxRow, boxCol = (row // 3) * 3, (col // 3) * 3
    for ri in range(boxRow, boxRow + 3):
        for ci in range(boxCol, boxCol + 3):
            if num in possibilities.get((ri, ci), set()):
                locations.append((ri, ci))

    if len(locations) == 2 and (row, col) in locations:
        peerCell = locations[0]
        if locations[1] == (row, col):
            peerCell = locations[0]
        else:
            peerCell = locations[1]
        return (num, peerCell)

    return None


#strong links are basically like an if then statement of an OFF candidate implying ON for another
#strong links could be anywhere so to simplify the search, we will use bi-value and bi-locations
#primarily
#https://www.sudokuwiki.org/Print_Weak_and_Strong_Links
def findStrongLinks(possibilities, node):
    num, cell = node
    row, col = cell[0], cell[1]
    links = set()
    cellCands = possibilities.get((row, col), set())

    #bivalue check
    if len(cellCands) == 2 and num in cellCands:
        otherNum = 0
        for cand in cellCands:
            if cand != num:
                otherNum = cand
                break

        #add the link
        if otherNum != 0:
            links.add((otherNum, (row, col)))

    #bilocation beck
    peerNode = getBilocation(possibilities, row, col, num)
    if peerNode:
        links.add(peerNode)

    links_list = []
    for link in links:
        links_list.append(link)
    return links_list


#finds the weak link. unlike strong links, there is not really a simplifying
#idea we are using, instead we are just searching all possibilities
#this is cause weak links are if ON then OFF and if there are multiple same numbers
#in the same group, we choose at random which one to be considered
def findWeakLinks(possibilities, node):
    num, cell = node
    row, col = cell[0], cell[1]
    links = set()

    #differnet numbers within the cell
    for otherNum in possibilities.get((row, col), set()):
        if otherNum != num:
            links.add((otherNum, (row, col)))

    #numbers within the same group
    for peerCell in getSeeingCells(row, col):
        peerRow, peerCol = peerCell[0], peerCell[1]
        if num in possibilities.get((peerRow, peerCol), set()):
            links.add((num, (peerRow, peerCol)))

    links_list = []
    for link in links:
        links_list.append(link)
    return links_list


#given the found AIC chain and what type it is out of the three types and eliminate the candidates
def performEliminations(possibilities, chain, ruleType):
    startNode = chain[0]
    endNode = chain[-1]
    startNum, startCell = startNode
    startRow, startCol = startCell[0], startCell[1]

    # print(f"AIC found, type: {ruleType}")
    # print(f"chain: {chain}")

    if ruleType == "Type 2":
        cellCands = possibilities.get((startRow, startCol), set())
        #check if startnum is still a candidate and its not the only candidate
        if startNum in cellCands and len(cellCands) > 1:
            # print(f"eliminating {startNum} from ({startRow}, {startCol})")
            possibilities[(startRow, startCol)].discard(startNum)
            return True

    elif ruleType == "Type 3":
        cellCands = possibilities.get((startRow, startCol), set())
        #check if the cell has candidates and is not already solved for startnum
        if cellCands and cellCands != {startNum}:
            # print(f"setting {startNum} as solution for ({startRow}, {startCol})")

            #explicitly clear the set and add only the solution
            new_set = set()
            new_set.add(startNum)
            possibilities[(startRow, startCol)] = new_set

            #eliminate the solution from peers
            for peerCell in getSeeingCells(startRow, startCol):
                peerRow, peerCol = peerCell[0], peerCell[1]

                #check if the peer has startnum and is not a solved cell
                if startNum in possibilities.get((peerRow, peerCol), set()) and len(possibilities[(peerRow, peerCol)]) > 1:
                    possibilities[(peerRow, peerCol)].discard(startNum)
            return True

    elif ruleType == "Type 1":
        endNum, endCell = endNode
        endRow, endCol = endCell[0], endCell[1]

        #check for the correct AIC type 1 structure which is the same startNum and endNUm
        if startNum != endNum:
            return False

        startPeers = getSeeingCells(startRow, startCol)
        endPeers = getSeeingCells(endRow, endCol)
        commonPeers = set()

        for peer in startPeers:
            if peer in endPeers:
                commonPeers.add(peer)

        eliminated = False
        for (row, col) in commonPeers:
            #skip the start and end cells
            if (row, col) == (startRow, startCol) or (row, col) == (endRow, endCol):
                continue

            #perform elimination
            if startNum in possibilities.get((row, col), set()) and len(possibilities[(row, col)]) > 1:
                # print(f"eliminating {startNum} from ({row}, {col})")
                possibilities[(row, col)].discard(startNum)
                eliminated = True
        return eliminated

    return False


#performs a DFS to try to find a working AIC
def recSearchForChain(possibilities, startNode, currentNode, chain, isNextStrong, depth, visited):
    if depth > MAX_SEARCH_DEPTH:
        return None

    #determine which link function to call
    peers = []
    if isNextStrong:
        peers = findStrongLinks(possibilities, currentNode)
    else:
        peers = findWeakLinks(possibilities, currentNode)

    for nextNode in peers:
        #check for the two closure conditions
        allowClosure = (nextNode == startNode) or (nextNode not in visited)

        if depth >= MIN_SEARCH_DEPTH and allowClosure:
            #type 2 where we end with weak link by looping back
            if nextNode == startNode and not isNextStrong:
                return (chain + [nextNode], "Type 2")

            #type 3 where end with a strong link by looping back to start
            if nextNode == startNode and isNextStrong:
                return (chain + [nextNode], "Type 3")

            #type 1 continous chain type where we do not form a loop
            startNum, _ = startNode #gemini helped me with this
            nextNum, _ = nextNode
            if isNextStrong and nextNum == startNum and nextNode != startNode:
                return (chain + [nextNode], "Type 1")

        #recurse
        if nextNode not in visited:
            visited.add(nextNode)

            result = recSearchForChain(
                possibilities,
                startNode,
                nextNode,
                chain + [nextNode],
                not isNextStrong,
                depth + 1,
                visited
            )

            if result:
                return result

            visited.remove(nextNode)

    return None


#wrapper for recSearchChain function
def findChainFromCell(possibilities, row, col):
    cellCands = possibilities.get((row, col), set())
    if not cellCands:
        return None

    startNodes = set()

    #bivalue cells
    if len(cellCands) == 2:
        for num in cellCands:
            startNodes.add((num, (row, col)))

    # bilocations
    for num in cellCands:
        if getBilocation(possibilities, row, col, num) is not None:
            startNodes.add((num, (row, col)))

    #start search from each potential start node
    for startNode in startNodes:
        initialPeers = findStrongLinks(possibilities, startNode)

        for peerNode in initialPeers:
            if peerNode == startNode:
                continue

            chain = [startNode, peerNode]

            #start the visited set
            visited = set()
            visited.add(startNode)
            visited.add(peerNode)

            #the first link is strong, so the next link searched for is weak
            aicResult = recSearchForChain(
                possibilities,
                startNode,
                peerNode,
                chain,
                isNextStrong=False,
                depth=1,
                visited=visited
            )

            if aicResult:
                return aicResult

    return None

#main function using the possibilities grid
def alternatingInferenceChain(possibilities):
    for row in range(9):
        for col in range(9):
            aicResult = findChainFromCell(possibilities, row, col)

            if aicResult:
                foundChain, ruleType = aicResult

                if performEliminations(possibilities, foundChain, ruleType):
                    # print("aic found and eliminated some possibilities")
                    return possibilities

    # print("exiting the aic function")
    return possibilities

testPuzzle = [
  [None, 5, None, None, None, None, None, 8, None],
  [None, None, None, None, 8, 6, None, None, None],
  [None, None, None, 2, None, 1, None, 7, None],
  [None, None, 9, None, 2, None, 6, None, 1],
  [2, 8, None, None, None, None, None, 5, 4],
  [7, None, 3, None, 6, None, 9, None, None],
  [None, 9, None, 6, None, 5, None, None, None],
  [None, None, None, 1, 7, None, None, None, None],
  [None, 3, None, None, None, None, None, 1, None]
]

if __name__ == "__main__":
    finalPossibilities = alternatingInferenceChain(makePossibilityPuzzle(testPuzzle))
