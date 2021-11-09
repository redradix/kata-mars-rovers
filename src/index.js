const DIRECTIONS = ['N', 'E', 'S', 'W']

class Rover {
  constructor(params) {
    this.position = [...params.startingPoint]
    this.direction = params.direction
    this.gridSize = params.gridSize
  }

  turn(command) {
    let directionIndex = DIRECTIONS.indexOf(this.direction)
    if (command === 'r') {
      directionIndex++
      if (directionIndex > DIRECTIONS.length - 1) {
        directionIndex = 0
      }
    } else if (command === 'l') {
      directionIndex--
      if (directionIndex < 0) {
        directionIndex = DIRECTIONS.length - 1
      }
    }
    this.direction = DIRECTIONS[directionIndex]
  }

  runCommands(commands) {
    commands.forEach(command => {
      if (command === 'r' || command === 'l') {
        this.turn(command)
      } else if (command === 'f' && this.direction === 'E') {
        this.position[0]++
      } else if (command === 'f' && this.direction === 'W') {
        this.position[0]--
      } else if (command === 'b' && this.direction === 'W') {
        this.position[0]++
      } else if (command === 'b' && this.direction === 'E') {
        this.position[0]--
      }
    })
  }
}

module.exports = Rover
