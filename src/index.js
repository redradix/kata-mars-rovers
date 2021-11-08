class Rover {
  constructor(params) {
    this.position = params.startingPoint
    this.direction = params.direction
    this.gridSize = params.gridSize
  }

  runCommands(commands) {
    if (commands[0] === 'r') {
      this.direction = 'E'
    }
  }
}

module.exports = Rover
