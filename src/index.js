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

const move = (initialPosition, commands) => {
  const [x, y, orientation] = initialPosition
  let variation = [0, 0]
  let newOrientation = orientation

  commands.split('').forEach(command => {
    if (isMoving(command)) {
      const newVariation = getVariation(command, orientation)
      variation[0] += newVariation[0]
      variation[1] += newVariation[1]
    }

    if (isTurning(command)) {
      newOrientation = getTurnedOrientation(command, orientation)
    }
  })
  
  const [variationX, variationY] = variation

  return [x + variationX, y + variationY, newOrientation]
}

module.exports = move