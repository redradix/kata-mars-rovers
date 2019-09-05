const { startExploration } = require('./index');

describe('Mars Rovers', () => {
  const gridSize = [3, 3];

  test('stays in the same position for an invalidad command', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'x')).toEqual({
      position: [1, 1],
      direction: 'N'
    });
  });

  test('turn the rover left', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'l')).toEqual({
      position: [1, 1],
      direction: 'W'
    });
  });

  test('turn the rover right', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'r')).toEqual({
      position: [1, 1],
      direction: 'E'
    });
  });

  test('stays in the same position for trying to move the rover out of the grid', () => {
    expect(startExploration([2, 2], 'N', gridSize, 'f')).toEqual({
      position: [2, 2],
      direction: 'N'
    });
  });

  test('move the rover forward', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'f')).toEqual({
      position: [1, 2],
      direction: 'N'
    });
  });

  test('move the rover backward', () => {
    expect(startExploration([1, 1], 'N', gridSize, 'b')).toEqual({
      position: [1, 0],
      direction: 'N'
    });
  });
});
