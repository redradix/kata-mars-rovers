const DIRECTIONS = ['N', 'E', 'S', 'W']

class Rover {
  constructor(params) {
    this.position = params.startingPoint
    this.direction = params.direction
    this.gridSize = params.gridSize
  }

  runCommands(commands) {
    let directionIndex = DIRECTIONS.indexOf(this.direction)
    commands.forEach(command => {
      if (command === 'r') {
        directionIndex++
        if (directionIndex > DIRECTIONS.length - 1) {
          directionIndex = 0
        }
        this.direction = DIRECTIONS[directionIndex]
      } else if (command === 'l') {
        directionIndex--
        if (directionIndex < 0) {
          directionIndex = DIRECTIONS.length - 1
        }
        this.direction = DIRECTIONS[directionIndex]
      }
    })
  }
}

module.exports = Rover
