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

const getNewPosition = (prevPosition, variation, gridSize) => {
  const [prevPositionX, prevPositionY] = prevPosition
  const [variationX, variationY] = variation

  let [newPositionX, newPositionY] = [prevPositionX + variationX, prevPositionY + variationY]

  if (newPositionX > gridSize || newPositionX < 0) {
    newPositionX = prevPositionX
  }
  
  if (newPositionY > gridSize || newPositionY < 0) {
    newPositionY = prevPositionY
  }

  return [newPositionX, newPositionY]
}

const move = (initialPosition, commands, gridSize) => {
  let [x, y, orientation] = initialPosition
  let position = [x, y]

  commands.split('').forEach(command => {
    if (isMoving(command)) {
      const variation = getVariation(command, orientation)

      position = getNewPosition(position, variation, gridSize)
    }

    if (isTurning(command)) {
      orientation = getTurnedOrientation(command, orientation)
    }
  })
  
  return [...position, orientation]
}

module.exports = move