const rotate = (position, direction, command) => {
  const rotation = {
    l: {
      N: 'W',
      W: 'S',
      S: 'E',
      E: 'N'
    },
    r: {
      N: 'E',
      E: 'S',
      S: 'W',
      W: 'N'
    }
  };

  return {
    position,
    direction: rotation[command][direction]
  };
};

const isOutsideGrid = (newPosition, gridSize) => {
  return (
    newPosition[0] >= gridSize[0] ||
    newPosition[1] >= gridSize[1] ||
    newPosition[0] < 0 ||
    newPosition[1] < 0
  );
};

const move = (position, direction, gridSize, command) => {
  const movement = {
    f: {
      N: [0, 1],
      S: [0, -1],
      E: [1, 0],
      W: [-1, 0]
    },
    b: {
      N: [0, -1],
      S: [0, 1],
      E: [-1, 0],
      W: [1, 0]
    }
  };

  const movementToApply = movement[command][direction];
  const newPosition = [
    position[0] + movementToApply[0],
    position[1] + movementToApply[1]
  ];

  // only returns the new position if it's not outside of grid
  return {
    position: !isOutsideGrid(newPosition, gridSize) ? newPosition : position,
    direction
  };
};

const processCommand = (position, direction, gridSize, command) => {
  switch (command) {
    case 'l':
    case 'r':
      return rotate(position, direction, command);
    case 'f':
    case 'b':
      return move(position, direction, gridSize, command);
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
