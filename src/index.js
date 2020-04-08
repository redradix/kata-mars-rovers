const move = (initialPosition) => {
  const orientation = initialPosition[2]
  const y = initialPosition[1]
  const x = initialPosition[0]

  if (orientation === 'E') {
    return [2, 1, 'E']
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