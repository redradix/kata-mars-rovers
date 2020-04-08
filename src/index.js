const move = (initialPosition) => {
  const orientation = initialPosition[2]

  if (orientation === 'E') {
    return [2, 1, 'E']
  }
  
  if (orientation === 'S') {
    return [1, 0, 'S']
  }

  if (orientation === 'W') {
    return [1, 2, 'W']
  }

  return [1, 2, 'N']
}

module.exports = move