function createRoverCommander (initialPosition, initialFacing) {
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
