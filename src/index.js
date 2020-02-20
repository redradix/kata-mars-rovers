const NORTH = "N"
const SOUTH = "S"
const EAST = "E"
const WEST = "W"

const directions = {
  "NORTH": NORTH,
  "SOUTH": SOUTH,
  "WEST": WEST,
  "EAST": EAST
}

const COMMAND_TURN_LEFT = "L"
const COMMAND_TURN_RIGHT = "R"
const COMMAND_MOVE_FORWARD = "F"
const COMMAND_MOVE_BACKWARD = "B"

const commands = {
  "TURN_LEFT": COMMAND_TURN_LEFT,
  "TURN_RIGHT": COMMAND_TURN_RIGHT,
  "MOVE_FORWARD": COMMAND_MOVE_FORWARD,
  "MOVE_BACKWARD": COMMAND_MOVE_BACKWARD
}

const conversionDirectionRight = {
  [NORTH]: EAST,
  [SOUTH]: WEST,
  [WEST]: NORTH,
  [EAST]: SOUTH
}

const conversionDirectionLeft = {
  [NORTH]: WEST,
  [SOUTH]: EAST,
  [WEST]: SOUTH,
  [EAST]: NORTH
}

const conversionDirection = {
  [COMMAND_TURN_LEFT]: conversionDirectionLeft,
  [COMMAND_TURN_RIGHT]: conversionDirectionRight
}

function executeTurn(command, facing) {
  return conversionDirection[command][facing] || facing
}

function isTurnCommand(command) {
  return isTurnRightCommand(command)  || isTurnLeftCommand(command)
}
function isTurnRightCommand(command) {
  return command === COMMAND_TURN_RIGHT
}

function isTurnLeftCommand(command) {
  return command === COMMAND_TURN_LEFT
}

function isMoveCommand(command) {
  return isMoveBackwardCommand(command) || isMoveForwardCommand(command)
}

function isMoveForwardCommand(command) {
  return command === "F"
}

function isMoveBackwardCommand(command) {
  return command === "B"
}

const forwardFunctions = {
  [NORTH]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition + 1, yAxisPosition, facing],
  [SOUTH]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition - 1, yAxisPosition, facing],
  [WEST]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition, yAxisPosition - 1, facing],
  [EAST]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition, yAxisPosition + 1, facing]
}

const backwardFunctions = {
  [NORTH]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition - 1, yAxisPosition, facing],
  [SOUTH]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition + 1, yAxisPosition, facing],
  [WEST]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition, yAxisPosition + 1, facing],
  [EAST]: ([xAxisPosition, yAxisPosition, facing]) => [xAxisPosition, yAxisPosition - 1, facing]
}

const moveFunctions = {
  [COMMAND_MOVE_FORWARD] : forwardFunctions,
  [COMMAND_MOVE_BACKWARD] : backwardFunctions
}

const identity = (value) => value

function executeMove(command, [xAxisPosition, yAxisPosition, facing]) {
  return (moveFunctions[command][facing] || identity)([xAxisPosition, yAxisPosition, facing])
}

function executeCommands(initialPosition, gridSize, commands) {
  let [startX, startY, facing] = initialPosition
  let finalPosition = commands.reduce(([intermediateX, intermediateY, intermediateFacing], command) => {
    if( isTurnCommand(command) ) {
      return [intermediateX, intermediateY, executeTurn(command, intermediateFacing)]
    } else if ( isMoveCommand(command) ) {
      return executeMove(command, [intermediateX, intermediateY, intermediateFacing])
    } else {
      return [intermediateX, intermediateY, intermediateFacing]
    }
  }, [startX, startY, facing])
  return {position: finalPosition}
}

module.exports = {executeCommands, directions, commands}