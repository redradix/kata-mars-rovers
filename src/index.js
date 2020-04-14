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

const move = (initialPosition, commands, gridSize) => {
  const [x, y, orientation] = initialPosition
  let newOrientation = orientation
  let newPosition = [x, y]

  commands.split('').forEach(command => {
    if (isMoving(command)) {
      const [variationX, variationY] = getVariation(command, orientation)

      newPosition = [newPosition[0] + variationX, newPosition[1] + variationY]

      if (newPosition[0] > gridSize) {
        newPosition[0] = gridSize
      }
      if (newPosition[0] < 0) {
        newPosition[0] = 0
      }
      if (newPosition[1] > gridSize) {
        newPosition[1] = gridSize
      }
      if (newPosition[1] < 0) {
        newPosition[1] = 0
      }
    }

    if (isTurning(command)) {
      newOrientation = getTurnedOrientation(command, newOrientation)
    }
  })
  
  return [...newPosition, newOrientation]
}

module.exports = move