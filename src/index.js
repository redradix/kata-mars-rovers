const move = (initialPosition, command) => {
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

  if (command === 'l') {
    if (orientation === 'N') {
      newOrientation = 'W'
    }

    if (orientation === 'S') {
      newOrientation = 'E'
    }

    if (orientation === 'E') {
      newOrientation = 'N'
    }

    if (orientation === 'W') {
      newOrientation = 'S'
    }
  }

  if (command === 'r') {
    if (orientation === 'N') {
      newOrientation = 'E'
    }

    if (orientation === 'S') {
      newOrientation = 'W'
    }

    if (orientation === 'E') {
      newOrientation = 'S'
    }
  }

  const [variationX, variationY] = variation

  return [x + variationX, y + variationY, newOrientation]
}

module.exports = move