const move = (initialPosition) => {
  const [x, y, orientation] = initialPosition

  if (orientation === 'E') {
    return [x+1, y, orientation]
  }
  
  if (orientation === 'S') {
    return [1, 0, orientation]
  }

  if (orientation === 'W') {
    return [1, 2, orientation]
  }

  return [x, y+1, orientation]
}

module.exports = move