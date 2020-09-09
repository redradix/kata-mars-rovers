const DIRECTIONS = {
  NORTH: 'N',
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W',
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

function createRoverCommander (gridSize, initialPosition, initialFacing) {
  if (!isInGrid(gridSize, initialPosition))
    throw new Error('Initial position is not inside grid boundaries')

  return function roverCommander(commands) {
    let facing = initialFacing
    let position = initialPosition

    if (commands === 'f') {
      position = moveForward(facing, position)
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
