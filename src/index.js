const createGrid = (sizes) => {
  const grid = new Array()
  for (let i = 0; i < sizes[0]; i++) {
    const row = new Array()
    for (let k = 0; k < sizes[1]; k++) {
      row.push(0)
    }
    grid.push(row)
  }
  return grid
}

const setLocation = (startingPoint, initialDirection, grid) => {
  const newGrid = [...grid]
  newGrid[startingPoint[0]][startingPoint[1]] = initialDirection
  return newGrid
}

const changeDirection = (direction, command) => {
  const directions = ['N', 'E', 'S', 'W']
  const indexOfDirection = directions.indexOf(direction)
  return {
    l: indexOfDirection !== 0 ? directions[indexOfDirection - 1] : directions[3],
    r: indexOfDirection !== 3 ? directions[indexOfDirection + 1] : directions[0]
  }[command]
}

const checkForValidLocation = (previousLocation, newLocation, gridSize) => {

  const extendsLeftLimit = newLocation[1] < 0
  const extendsRightLimit = newLocation[1] >= gridSize[1]
  const extendsUpperLimit = newLocation[0] < 0
  const extendsLowerLimit = newLocation[0] >= gridSize[0]

  return extendsLeftLimit || extendsRightLimit || extendsUpperLimit || extendsLowerLimit ? previousLocation : newLocation
}

const changeLocation = (previousLocation, direction, gridSize, command) => {

  let newLocation

  let referenceLocations = [
    [previousLocation[0] - 1, previousLocation[1]],
    [previousLocation[0], previousLocation[1] + 1],
    [previousLocation[0] + 1, previousLocation[1]],
    [previousLocation[0], previousLocation[1] - 1]
  ]

  newLocation = {
    f: {
      N: referenceLocations[0],
      E: referenceLocations[1],
      S: referenceLocations[2],
      W: referenceLocations[3]
    }[direction],
    b: {
      N: referenceLocations[2],
      E: referenceLocations[3],
      S: referenceLocations[0],
      W: referenceLocations[1]
    }[direction]
  }[command]

  return checkForValidLocation(previousLocation, newLocation, gridSize)
}

const rover = (startingPoint, initialDirection, gridSize, commands) => {
  let direction = initialDirection
  let location = startingPoint

  commands.forEach((command) => {
    if (command === 'l' || command === 'r') {
      direction = changeDirection(direction, command)
    } else if (command === 'f' || command === 'b') {
      location = changeLocation(location, direction, gridSize, command)
    }
  })

  const finalGrid = createGrid(gridSize)
  const finalGridWithLocation = setLocation(location, direction, finalGrid)
  return finalGridWithLocation
}

module.exports = rover

// console.log(rover([1, 1], 'E', [2, 2], ['f']))