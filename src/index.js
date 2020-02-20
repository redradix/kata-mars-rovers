const conversionDirectionRight = {
  "N": "E",
  "S": "W",
  "W": "N",
  "E": "S"
}

function turnRight(facing) {
  return conversionDirectionRight[facing] || facing
}

const conversionDirectionLeft = {
  "N": "W",
  "S": "E",
  "W": "S",
  "E": "N"
}

function turnLeft(facing) {
  return conversionDirectionLeft[facing] || facing
}

function isTurnRightCommand(command) {
  return command === "R"
}

function isLeftRightCommand(command) {
  return command === "L"
}

function executeCommands(initialPosition, gridSize, commands) {
  let [startX, startY, facing] = initialPosition
  let finalPosition = commands.reduce(([intermediateX, intermediateY, intermediateFacing], command) => {
    if( isTurnRightCommand(command) ) {
      return [intermediateX, intermediateY, turnRight(intermediateFacing)]
    } else if ( isLeftRightCommand(command) ) {
      return [intermediateX, intermediateY, turnLeft(intermediateFacing)]
    }else {
      return [intermediateX, intermediateY, intermediateFacing]
    }
  }, [startX, startY, facing])
  return {position: finalPosition}
}

module.exports = {executeCommands}