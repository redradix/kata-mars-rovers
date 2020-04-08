const move = (initialPosition, command) => {
  const [x, y, orientation] = initialPosition
  let variation

  if (command === 'b') {
    if (orientation === 'N') {
      variation = {x: 0, y: -1}
    }

    if (orientation === 'E') {
      variation = {x: -1, y: 0}
    }

    if (orientation === 'S') {
      variation = {x: 0, y: 1}
    }

    if (orientation === 'W') {
      variation = {x: 1, y: 0}
    }
  }
  
  if (command === 'f') {
    if (orientation === 'E') {
      variation = {x: 1, y: 0}
    }
    
    if (orientation === 'S') {
      variation = {x: 0, y: -1}
    }
  
    if (orientation === 'W') {
      variation = {x: -1, y: 0}
    }
  
    if (orientation === 'N') {
      variation = {x: 0, y: 1}
    }
  }

  return [x + variation.x, y + variation.y, orientation]
}

module.exports = move