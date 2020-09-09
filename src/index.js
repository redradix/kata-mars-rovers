function createRoverCommander (gridSize, initialPosition, initialFacing) {
  const [ height, width ] = gridSize
  const [ row, column ] = initialPosition

  if (row < 0 || column < 0 || row >= height || column >= width) {
    throw new Error('Initial position is not inside grid boundaries')
  }

  return function roverCommander(commands) {
    return {
      facing: initialFacing,
      position: initialPosition,
    }
  }
}

module.exports = {
  createRoverCommander,
}
