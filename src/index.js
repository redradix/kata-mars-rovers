const isMoving = command => command === 'f' || command === 'b'
const isTurning = command => command === 'l' || command === 'r'

const getTurnedOrientation = (command, orientation) => {
  const TURNED_ORIENTATIONS = {
    l: {
      N: 'W',
      S: 'E',
      E: 'N',
      W: 'S'
    }, 
    r: {
      N: 'E',
      S: 'W',
      E: 'S',
      W: 'N'
    }
  }

  return TURNED_ORIENTATIONS[command][orientation]
}

const getVariation = (command, orientation) => {
  const VARIATIONS = {
    f: {
      N: [0, 1],
      S: [0, -1],
      E: [1, 0],
      W: [-1, 0]
    },
    b: {
      N: [0, -1],
      S: [0, 1],
      E: [-1, 0],
      W: [1, 0]
    }
  }

  return VARIATIONS[command][orientation]
}

const getNewCoordinate = (prevCoordinate, variation, gridSize) => {
  const [prevCoordinateX, prevCoordinateY] = prevCoordinate
  const [variationX, variationY] = variation

  let [newCoordinateX, newCoordinateY] = [prevCoordinateX + variationX, prevCoordinateY + variationY]

  if (newCoordinateX > gridSize || newCoordinateX < 0) {
    newCoordinateX = prevCoordinateX
  }
  
  if (newCoordinateY > gridSize || newCoordinateY < 0) {
    newCoordinateY = prevCoordinateY
  }

  return [newCoordinateX, newCoordinateY]
}

const move = (initialPosition, commands, gridSize) => {
  return commands.split('').reduce((position, command) => {
    const coordinate = [position[0], position[1]]
    const orientation = position[2]

    if (isMoving(command)) {
      const variation = getVariation(command, orientation)
      const newCoordinate = getNewCoordinate(coordinate, variation, gridSize)
      return [...newCoordinate, orientation]
    }

    if (isTurning(command)) {
      const newOrientation = getTurnedOrientation(command, orientation)
      return [...coordinate, newOrientation]
    }
  }, initialPosition)
}

module.exports = move