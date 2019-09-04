const rotate = (position, direction, command) => {
  const rotateLeft = {
    N: 'W',
    W: 'S',
    S: 'E',
    E: 'N'
  };
  const rotateRight = {
    N: 'E',
    E: 'S',
    S: 'W',
    W: 'N'
  };

  return {
    position: position,
    direction: command === 'l' ? rotateLeft[direction] : rotateRight[direction]
  };
};

const processCommand = (position, direction, gridSize, command) => {
  switch (command) {
    case 'l':
    case 'r':
      return rotate(position, direction, command);
    default:
      return { position, direction };
  }
};

const startExploration = (initalPosition, direction, gridSize, command) => {
  return processCommand(initalPosition, direction, gridSize, command);
};

module.exports = {
  startExploration
};
