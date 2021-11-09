const DIRECTIONS = ['N', 'E', 'S', 'W']

class Rover {
  constructor(params) {
    if (
      typeof params.gridSize !== 'object' ||
      typeof params.gridSize[0] !== 'number' ||
      typeof params.gridSize[1] !== 'number'
    ) {
      throw new Error('ERR_GRID_SIZE_INVALID')
    }
    this.gridSize = params.gridSize
    if (
      typeof params.startingPoint !== 'object' ||
      typeof params.startingPoint[0] !== 'number' ||
      typeof params.startingPoint[1] !== 'number'
    ) {
      throw new Error('ERR_STARTING_POINT_INVALID')
    }
    if (
      params.startingPoint[0] < 0 ||
      params.startingPoint[1] < 0 ||
      params.startingPoint[0] > params.gridSize[0] ||
      params.startingPoint[1] > params.gridSize[1]
    ) {
      throw new Error('ERR_STARTING_POINT_OUT_OF_BOUNDS')
    }
    this.position = [...params.startingPoint]
    this.direction = params.direction
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
      throw new Error('ERR_MOVING_OUT_OF_BOUNDS')
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
