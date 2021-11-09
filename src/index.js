const DIRECTIONS = ['N', 'E', 'S', 'W']

const isArrayOfTwoIntegers = arr =>
  typeof arr === 'object' &&
  parseInt(arr[0], 10) === arr[0] &&
  parseInt(arr[1], 10) === arr[1]

const isCoordinateInGridSide = (postionCoordinate, gridSideLength) =>
  postionCoordinate >= 0 && postionCoordinate <= gridSideLength

const isPositionInBounds = (position, gridSize) =>
  isCoordinateInGridSide(position[0], gridSize[0]) &&
  isCoordinateInGridSide(position[1], gridSize[1])

class Rover {
  constructor(params) {
    if (!isArrayOfTwoIntegers(params.gridSize)) {
      throw new Error('ERR_GRID_SIZE_INVALID')
    }
    this.gridSize = params.gridSize

    if (!isArrayOfTwoIntegers(params.startingPoint)) {
      throw new Error('ERR_STARTING_POINT_INVALID')
    }
    if (!isPositionInBounds(params.startingPoint, params.gridSize)) {
      throw new Error('ERR_STARTING_POINT_OUT_OF_BOUNDS')
    }
    this.position = [...params.startingPoint]

    if (!DIRECTIONS.includes(params.direction)) {
      throw new Error('ERR_DIRECTION_INVALID')
    }
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
      !isCoordinateInGridSide(
        this.position[positionIndex] + positionModifier,
        this.gridSize[positionIndex],
      )
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
