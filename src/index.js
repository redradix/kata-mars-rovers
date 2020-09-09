const DIRECTIONS = {
  NORTH: 'N',
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W',
}

const fixToBoundaries = ({ length }, index) => {
  if (index < 0) return length + index % length
  if (index >= length) return index % length
  return index
}

const isInGrid = ([ height, width ], [ row, column ]) => {
  if (row < 0 || row >= height) return false
  if (column < 0|| column >= width) return false
  return true
}

const moveForward = (facing, [ x, y ]) => {
  switch(facing) {
    case DIRECTIONS.SOUTH:
      return [ x, y + 1 ]
    case DIRECTIONS.NORTH:
      return [ x, y - 1 ]
    case DIRECTIONS.EAST:
      return [ x + 1, y ]
    case DIRECTIONS.WEST:
      return [ x - 1, y ]
  }
}

const moveBackward = (facing, [ x, y ]) => {
  switch(facing) {
    case DIRECTIONS.SOUTH:
      return [ x, y - 1 ]
    case DIRECTIONS.NORTH:
      return [ x, y + 1 ]
    case DIRECTIONS.EAST:
      return [ x - 1, y ]
    case DIRECTIONS.WEST:
      return [ x + 1, y ]
  }
}

const turnClockwise = (steps, facing) => {
  const CLOCKWISE = [
    DIRECTIONS.NORTH,
    DIRECTIONS.EAST,
    DIRECTIONS.SOUTH,
    DIRECTIONS.WEST,
  ]
  const newIndex = steps + CLOCKWISE.indexOf(facing)
  return CLOCKWISE[fixToBoundaries(CLOCKWISE, newIndex)]
}
const turnLeft = turnClockwise.bind(undefined, -1)
const turnRight = turnClockwise.bind(undefined, 1)


function createRoverCommander (gridSize, initialPosition, initialFacing) {
  if (!isInGrid(gridSize, initialPosition))
    throw new Error('Initial position is not inside grid boundaries')

  return function roverCommander(commands) {
    let facing = initialFacing
    let position = initialPosition

    if (commands === 'f') {
      position = moveForward(facing, position)
    } else if (commands === 'b') {
      position = moveBackward(facing, position)
    }

    if (commands === 'l') {
      facing = turnLeft(facing)
    } else if (commands === 'r') {
      facing = turnRight(facing)
    }

    return {
      facing: facing,
      position: position
    }
  }
}

module.exports = {
  createRoverCommander,
  DIRECTIONS,
}
