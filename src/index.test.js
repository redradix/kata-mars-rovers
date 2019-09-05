const { startExploration } = require('./index');

describe('Mars Rovers', () => {
  const gridSize = [3, 3];

  test('stays in the same position for an invalid command type', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'x')).toEqual({
      position: [1, 1],
      direction: 'N'
    });
  });

  test('stays in the same position for an invalid command character', () => {
    expect(startExploration([1, 1], 'N', gridSize, ['x'])).toEqual({
      position: [1, 1],
      direction: 'N'
    });
  });

  test('turn the rover left', () => {
    expect(startExploration([1, 1], 'N', gridSize, ['l'])).toEqual({
      position: [1, 1],
      direction: 'W'
    });
  });

  test('turn the rover right', () => {
    expect(startExploration([1, 1], 'N', gridSize, ['r'])).toEqual({
      position: [1, 1],
      direction: 'E'
    });
  });

  test('stays in the same position for trying to move the rover out of the grid', () => {
    expect(startExploration([2, 2], 'N', gridSize, ['f'])).toEqual({
      position: [2, 2],
      direction: 'N'
    });
  });

  test('move the rover forward one position', () => {
    expect(startExploration([0, 1], 'E', gridSize, ['f'])).toEqual({
      position: [1, 1],
      direction: 'E'
    });
  });

  test('move the rover backward one position', () => {
    expect(startExploration([1, 1], 'W', gridSize, ['b'])).toEqual({
      position: [2, 1],
      direction: 'W'
    });
  });

  test('move the rover forward two positions', () => {
    expect(startExploration([0, 0], 'N', gridSize, ['f', 'f'])).toEqual({
      position: [0, 2],
      direction: 'N'
    });
  });

  test('move the rover forward one position and backward one position', () => {
    expect(startExploration([0, 0], 'N', gridSize, ['f', 'b'])).toEqual({
      position: [0, 0],
      direction: 'N'
    });
  });

  test('move the rover backward two positions', () => {
    expect(startExploration([0, 2], 'N', gridSize, ['b', 'b'])).toEqual({
      position: [0, 0],
      direction: 'N'
    });
  });
});
