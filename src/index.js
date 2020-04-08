const move = (initialPosition, command) => {
  const [x, y, orientation] = initialPosition

  if (command === 'b') {
    if (orientation === 'N') {
      const variation = {x: 0, y: -1}
      return [x + variation.x, y + variation.y, orientation]
    }

    if (orientation === 'E') {
      const variation = {x: -1, y: 0}
      return [x + variation.x, y + variation.y, orientation]
    }

    if (orientation === 'S') {
      const variation = {x: 0, y: 1}
      return [x + variation.x, y + variation.y, orientation]
    }

    if (orientation === 'W') {
      const variation = {x: 1, y: 0}
      return [x + variation.x, y + variation.y, orientation]
    }
  }

  if (orientation === 'E') {
    const variation = {x: 1, y: 0}
    return [x + variation.x, y + variation.y, orientation]
  }
  
  if (orientation === 'S') {
    const variation = {x: 0, y: -1}
    return [x + variation.x, y + variation.y, orientation]
  }

  if (orientation === 'W') {
    const variation = {x: -1, y: 0}
    return [x + variation.x, y + variation.y, orientation]
  }

  if (orientation === 'N') {
    const variation = {x: 0, y: 1}
    return [x + variation.x, y + variation.y, orientation]
  }
}

module.exports = move