const move = (initialPosition, command) => {
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

  const [x, y, orientation] = initialPosition
  let variation = [0, 0]
  let newOrientation = orientation
  
  if (command === 'f' || command === 'b') {
    variation = VARIATIONS[command][orientation]
  }

  if (command === 'l' || command === 'r') {
    newOrientation = TURNED_ORIENTATIONS[command][orientation]
  }

  const [variationX, variationY] = variation

  return [x + variationX, y + variationY, newOrientation]
}

module.exports = move