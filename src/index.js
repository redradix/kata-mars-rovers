const DIRECTIONS = {
  NORTH: 'N',
  EAST: 'E',
  SOUTH: 'S',
  WEST: 'W',
}

const COMMANDS = {
  LEFT: 'l',
  RIGHT: 'r',
  FORWARD: 'f',
  BACKWARD: 'b',
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

const move = (steps, { facing, position: [ x, y ] }) => {
  switch(facing) {
    case DIRECTIONS.SOUTH:
      return { facing, position: [ x, y + steps ] }
    case DIRECTIONS.NORTH:
      return { facing, position: [ x, y - steps ] }
    case DIRECTIONS.EAST:
      return { facing, position: [ x + steps, y ] }
    case DIRECTIONS.WEST:
      return { facing, position: [ x - steps, y ] }
  }
}
const moveForward = move.bind(undefined, 1)
const moveBackward = move.bind(undefined, -1)

const turnClockwise = (steps, { facing, position }) => {
  const CLOCKWISE = [
    DIRECTIONS.NORTH,
    DIRECTIONS.EAST,
    DIRECTIONS.SOUTH,
    DIRECTIONS.WEST,
  ]
  const newIndex = steps + CLOCKWISE.indexOf(facing)
  return {
    facing: CLOCKWISE[fixToBoundaries(CLOCKWISE, newIndex)],
    position,
  }
}
const turnLeft = turnClockwise.bind(undefined, -1)
const turnRight = turnClockwise.bind(undefined, 1)

const COMMAND_FUNCTIONS = {
  [COMMANDS.LEFT]: turnLeft,
  [COMMANDS.RIGHT]: turnRight,
  [COMMANDS.FORWARD]: moveForward,
  [COMMANDS.BACKWARD]: moveBackward,
}

const executeCommands = (rover, [ firstCommand, ...restCommands ]) => {
  if (firstCommand === undefined) return rover
  return executeCommands(
    COMMAND_FUNCTIONS[firstCommand](rover),
    restCommands
  )
}

function createRoverCommander (gridSize, initialPosition, initialFacing) {
  if (!isInGrid(gridSize, initialPosition))
    throw new Error('Initial position is not inside grid boundaries')

  return executeCommands.bind(undefined, {
    facing: initialFacing,
    position: initialPosition,
  })
}

module.exports = {
  createRoverCommander,
  DIRECTIONS,
  COMMANDS,
}
