const move = (initialPosition, command) => {
  const [x, y, orientation] = initialPosition
  let variation

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

  const [variationX, variationY] = variation

  return [x + variationX, y + variationY, orientation]
}

module.exports = move