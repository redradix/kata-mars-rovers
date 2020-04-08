const move = (initialPosition) => {
  const [x, y, orientation] = initialPosition

  if (orientation === 'E') {
    return [x+1, y, 'E']
  }
  
  if (orientation === 'S') {
    return [1, 0, 'S']
  }

  if (orientation === 'W') {
    return [1, 2, 'W']
  }

  return [x, y+1, 'N']
}

module.exports = move