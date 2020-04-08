const move = (initialPosition, command) => {
  const [x, y, orientation] = initialPosition

  if (command === 'b') {
    if (orientation === 'N') {
      const variation = -1
      return [x, y + variation, orientation]
    }

    if (orientation === 'E') {
      const variation = -1
      return [x + variation, y, orientation]
    }

    if (orientation === 'S') {
      const variation = 1
      return [x, y + variation, orientation]
    }

    if (orientation === 'W') {
      const variation = 1
      return [x + variation, y, orientation]
    }
  }

  if (orientation === 'E') {
    const variation = 1
    return [x + variation, y, orientation]
  }
  
  if (orientation === 'S') {
    const variation = -1
    return [x, y + variation, orientation]
  }

  if (orientation === 'W') {
    const variation = -1
    return [x + variation, y, orientation]
  }

  if (orientation === 'N') {
    const variation = 1
    return [x, y + variation, orientation]
  }
}

module.exports = move