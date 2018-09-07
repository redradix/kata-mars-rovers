const directionMaps = {
  N: [0, 1]
}

const rotateLeft = {
  N: 'W',
  S: 'E',
  W: 'S',
  E: 'N'
}

const rotateRight = {
  N: 'E',
  W: 'N',
  S: 'W',
  E: 'S'
}

function isAtGridBoundaries(orientation, position, gridSize, commands) {
  return orientation === 'N' && position[1] === gridSize[1] - 1
}

function processCommand(initialPos, gridSize, command){
  const { position, orientation } = initialPos

  switch (command) {
    case 'm':{
      if (isAtGridBoundaries(orientation, position, gridSize, command))
        return initialPos
      const [deltaX, deltaY] = directionMaps[orientation]
      return { orientation, position: [position[0] + deltaX, position[1] + deltaY] }
    }
    case 'l':
      return { position, orientation: rotateLeft[orientation]}
    
    case 'r':
      return { position, orientation: rotateRight[orientation]}

    default:
      return initialPos
  }
}

function rover(initialPos, gridSize, commandList){
  const { position, orientation } = initialPos
  const commands = commandList.split('')
  return commands.reduce((acc, cmd) => 
    processCommand(acc, gridSize, cmd), initialPos
  )
}

module.exports = {
  rover
}