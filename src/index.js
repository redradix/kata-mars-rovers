const conversionDirectionRight = {
  "N": "E",
  "S": "W",
  "W": "N",
  "E": "S"
}

const conversionDirectionLeft = {
  "N": "W",
  "S": "E",
  "W": "S",
  "E": "N"
}

const conversionDirection = {
  "L": conversionDirectionLeft,
  "R": conversionDirectionRight
}

function turnRight(facing) {
  return conversionDirectionRight[facing] || facing
}

function turnLeft(facing) {
  return conversionDirectionLeft[facing] || facing
}

function executeTurn(command, facing) {
  return conversionDirection[command][facing] || facing
}

function isTurnCommand(command) {
  return isTurnRightCommand(command)  || isTurnLeftCommand(command)
}
function isTurnRightCommand(command) {
  return command === "R"
}

function isTurnLeftCommand(command) {
  return command === "L"
}

function executeCommands(initialPosition, gridSize, commands) {
  let [startX, startY, facing] = initialPosition
  let finalPosition = commands.reduce(([intermediateX, intermediateY, intermediateFacing], command) => {
    if( isTurnCommand(command) ) {
      return [intermediateX, intermediateY, executeTurn(command, intermediateFacing)]
    } else {
      return [intermediateX, intermediateY, intermediateFacing]
    }
  }, [startX, startY, facing])
  return {position: finalPosition}
}

module.exports = {executeCommands}