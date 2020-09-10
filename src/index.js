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
  try {
    grid[startingPoint[0]][startingPoint[1]] = initialDirection
  } catch {
    grid[startingPoint[0] - 1][startingPoint[1]] = initialDirection
  }
}

const changeDirection = (direction, command) => {
  const directions = ['N', 'E', 'S', 'W']
  const indexOfDirection = directions.indexOf(direction)
  if (command === 'l') {
    return indexOfDirection !== 0 ? directions[indexOfDirection - 1] : directions[3]
  } else if (command === 'r') {
    return indexOfDirection !== 3 ? directions[indexOfDirection + 1] : directions[0]
  }
}

const checkForValidLocation = (previousLocation, newLocation) => {
  return newLocation[0] < 0 || newLocation[1] < 0 ? previousLocation : newLocation
}

const moveRover = (previousLocation, direction, command) => {

  let newLocation

  let referenceLocations = [
    [previousLocation[0] - 1, previousLocation[1]],
    [previousLocation[0], previousLocation[1] + 1],
    [previousLocation[0] + 1, previousLocation[1]],
    [previousLocation[0], previousLocation[1] - 1]
  ]

  if (command === 'f') {
    newLocation = {
      N: referenceLocations[0],
      E: referenceLocations[1],
      S: referenceLocations[2],
      W: referenceLocations[3]
    }[direction]
  } else if (command === 'b') {
    newLocation = {
      N: referenceLocations[2],
      E: referenceLocations[3],
      S: referenceLocations[0],
      W: referenceLocations[1]
    }[direction]
  }
  return checkForValidLocation(previousLocation, newLocation)
}

const rover = (startingPoint, initialDirection, gridSize, commands) => {
  let direction = initialDirection
  let location = startingPoint

  commands.forEach((command) => {
    if (command === 'l' || command === 'r') {
      direction = changeDirection(direction, command)
    } else if (command === 'f' || command === 'b') {
      location = moveRover(location, direction, command)
    }
  })

  const finalGrid = createGrid(gridSize)
  setLocation(location, direction, finalGrid)
  return finalGrid
}

module.exports = rover

console.log(rover([1, 0], 'S', [2, 2], ['f']))