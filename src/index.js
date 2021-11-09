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

  move(command) {
    const positionIndex =
      this.direction === 'E' || this.direction === 'W' ? 0 : 1

    let positionModifier = 1
    if (
      (command === 'f' && this.direction === 'N') ||
      (command === 'f' && this.direction === 'W') ||
      (command === 'b' && this.direction === 'E') ||
      (command === 'b' && this.direction === 'S')
    ) {
      positionModifier = -1
    }

    if (
      this.position[positionIndex] + positionModifier < 0 ||
      this.position[positionIndex] + positionModifier >
        this.gridSize[positionIndex]
    ) {
      throw new Error('Going out of bounds')
    }

    this.position[positionIndex] += positionModifier
  }

  runCommands(commands) {
    commands.forEach(command => {
      if (command === 'r' || command === 'l') {
        this.turn(command)
      } else if (command === 'f' || command === 'b') {
        this.move(command)
      }
    })
  }
}

module.exports = Rover
