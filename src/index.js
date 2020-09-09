function createRoverCommander (initialFacing) {
  return function roverCommander(commands) {
    return {
      facing: initialFacing,
    }
  }
}

module.exports = {
  createRoverCommander,
}
