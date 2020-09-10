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
  if (row < 0) return false
  if (row >= height) return false
  if (column < 0) return false
  if (column >= width) return false
  return true
}

const MOVING_FUNCTIONS = {
  [DIRECTIONS.SOUTH]: (steps, [ x, y ]) => [ x, y + steps ],
  [DIRECTIONS.NORTH]: (steps, [ x, y ]) => [ x, y - steps ],
  [DIRECTIONS.EAST]: (steps, [ x, y ]) => [ x + steps, y ],
  [DIRECTIONS.WEST]: (steps, [ x, y ]) => [ x - steps, y ],
}

const move = (steps) => (rover) => {
  const { facing, position } = rover
  const getNewPosition = MOVING_FUNCTIONS[facing](steps, position)
  return {
    ...rover,
    position: getNewPosition,
  }
}

const turnClockwise = (steps) => ({ facing, position }) => {
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

const COMMAND_FUNCTIONS = {
  [COMMANDS.LEFT]: turnClockwise(-1),
  [COMMANDS.RIGHT]: turnClockwise(1),
  [COMMANDS.FORWARD]: move(1),
  [COMMANDS.BACKWARD]: move(-1),
}

const executeCommands = (rover) => ([ firstCommand, ...restCommands ]) => {
  if (firstCommand === undefined) return rover
  const executeCommand = COMMAND_FUNCTIONS[firstCommand]
  return executeCommands(executeCommand(rover))(restCommands)
}

function createRoverCommander (gridSize, initialPosition, initialFacing) {
  if (!isInGrid(gridSize, initialPosition))
    throw new Error('Initial position is not inside grid boundaries')

  return executeCommands({
    facing: initialFacing,
    position: initialPosition,
  })
}

module.exports = {
  createRoverCommander,
  DIRECTIONS,
  COMMANDS,
}
