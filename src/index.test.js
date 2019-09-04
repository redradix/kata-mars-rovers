const { startExploration } = require('./index');

describe('Mars Rovers', () => {
  const gridSize = [3, 3];

  test('test to delete', () => {
    expect(4).toBe(4);
  });

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
});
