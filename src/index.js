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

function createRoverCommander (gridSize, initialPosition, initialFacing) {
  if (!isInGrid(gridSize, initialPosition))
    throw new Error('Initial position is not inside grid boundaries')

  return function roverCommander(commands) {
    let facing = initialFacing
    let [ x, y ] = initialPosition

    const moveForward = () => {
      switch(facing) {
        case DIRECTIONS.SOUTH:
          y++
          break
        case DIRECTIONS.NORTH:
          y--
          break
        case DIRECTIONS.EAST:
          x++
          break
        case DIRECTIONS.WEST:
          x--
          break
      }
    }

    if (commands === 'f') {
      moveForward()
    }

    return {
      facing: facing,
      position: [ x, y ]
    }
  }
}

module.exports = {
  createRoverCommander,
  DIRECTIONS,
}
