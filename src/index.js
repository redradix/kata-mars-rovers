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

  const [x, y, orientation] = initialPosition
  let variation = [0, 0]
  let newOrientation = orientation

  if (command === 'b') {
    if (orientation === 'N') {
      variation = [0, -1]
    }

    if (orientation === 'E') {
      variation = [-1, 0]
    }

    if (orientation === 'S') {
      variation = [0, 1]
    }

    if (orientation === 'W') {
      variation = [1, 0]
    }
  }
  
  if (command === 'f') {
    if (orientation === 'E') {
      variation = [1, 0]
    }
    
    if (orientation === 'S') {
      variation = [0, -1]
    }
  
    if (orientation === 'W') {
      variation = [-1, 0]
    }
  
    if (orientation === 'N') {
      variation = [0, 1]
    }
  }

  if (command === 'l' || command === 'r') {
    newOrientation = TURNED_ORIENTATIONS[command][orientation]
  }

  const [variationX, variationY] = variation

  return [x + variationX, y + variationY, newOrientation]
}

module.exports = move