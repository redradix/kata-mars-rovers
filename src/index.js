const move = (initialPosition, command) => {
  const [x, y, orientation] = initialPosition

  if (command === 'b') {
    if (orientation === 'N') {
      return [x, y-1, orientation]
    }

    if (orientation === 'E') {
      return [x-1, y, orientation]
    }

    if (orientation === 'S') {
      return [x, y+1, orientation]
    }

    if (orientation === 'W') {
      return [x+1, y, orientation]
    }
  }

  if (orientation === 'E') {
    return [x+1, y, orientation]
  }
  
  if (orientation === 'S') {
    return [x, y-1, orientation]
  }

  if (orientation === 'W') {
    return [x-1, y, orientation]
  }

  if (orientation === 'N') {
    return [x, y+1, orientation]
  }
}

module.exports = move