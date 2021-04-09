const executeCommands = (position, command) => {
  const [x, y, direction] = position

  if (command === 'r') {
    if (direction === 'E') {
      return [x, y, 'S']
    }

    if (direction === 'S') {
      return [x, y, 'W']
    }
    
    if (direction === 'W') {
      return [x, y, 'N']
    }
    
    if (direction === 'N') {
      return [x, y, 'E']
    }
  }

  if (command === 'f') {
    if (direction === 'W') {
      return [0, 1, 'W']
    }

    if (direction === 'S') {
      return [1, 0, 'S']
    }

    if (direction === 'E') {
      return [2, 1, 'E']
    }

    if (direction === 'N') {
      return [1, 2, 'N']
    }
  }

  throw new Error('Unknown direction')
}

module.exports = executeCommands