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

function outsideLimits(orientation, position, gridSize, commands) {
  return orientation === 'N' && position[1] === gridSize[1] - 1
}

function rover(initialPos, gridSize, commands){
  const { position, orientation } = initialPos

  switch (commands) {
    case 'm':{
      if (outsideLimits(orientation, position, gridSize, commands))
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

module.exports = {
  rover
}