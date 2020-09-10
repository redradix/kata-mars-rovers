const rover = require('./index')

describe('Mars Rovers', () => {

  it('Moves one position upwards on the grid when facing North with the instruction of moving forwards. ', () => {
    const grid = rover([1, 0], 'N', [2, 2], ['f'])
    const validRow = grid.filter((row) => row.includes('N'))

    expect(validRow.length === 1 && validRow[0][0] === 'N').toBe(true)
  })

  it('Moves one position to the left on the grid when facing West. ', () => {
    const grid = rover([1, 1], 'W', [2, 2], ['f'])
    const validRow = grid.filter((row) => row.includes('W'))

    expect(validRow.length === 1 && validRow[0][0] === 'W').toBe(true)
  })

  it('Moves one position downwards on the grid when facing South. ', () => {
    const grid = rover([0, 0], 'S', [2, 2], ['f'])
    const validRow = grid.filter((row) => row.includes('S'))

    expect(validRow.length === 1 && validRow[0][0] === 'S').toBe(true)
  })

  it('Moves one position to the right on the grid when facing East. ', () => {
    const grid = rover([0, 0], 'E', [2, 2], ['f'])
    const validRow = grid.filter((row) => row.includes('E'))

    expect(validRow.length === 1 && validRow[0][1] === 'E').toBe(true)
  })

  it('Moves one position downwards on the grid when facing North with the instruction of moving backwards. ', () => {
    const grid = rover([0, 0], 'N', [2, 2], ['b'])
    const validRow = grid.filter((row) => row.includes('N'))

    expect(validRow.length === 1 && validRow[0][0] === 'N').toBe(true)
  })

  it('Moves one position to the right on the grid when facing West with the instruction of moving backwards. ', () => {
    const grid = rover([0, 0], 'W', [2, 2], ['b'])
    const validRow = grid.filter((row) => row.includes('W'))

    expect(validRow.length === 1 && validRow[0][1] === 'W').toBe(true)
  })

  it('Moves one position upwards on the grid when facing South with the instruction of moving backwards. ', () => {
    const grid = rover([1, 0], 'S', [2, 2], ['b'])
    const validRow = grid.filter((row) => row.includes('S'))

    expect(validRow.length === 1 && validRow[0][0] === 'S').toBe(true)
  })

  it('Moves one position to the right on the grid when facing West with the instruction of moving backwards. ', () => {
    const grid = rover([0, 0], 'W', [2, 2], ['b'])
    const validRow = grid.filter((row) => row.includes('W'))

    expect(validRow.length === 1 && validRow[0][1] === 'W').toBe(true)
  })

  it('Changes direction to East when facing North and receiving the "r" command.', () => {
    expect(rover([0, 0], 'N', [1, 1], ['r'])[0][0]).toBe("E")
  })

  it('Changes direction to South when facing East and receiving the "r" command.', () => {
    const grid = rover([0, 0], 'E', [1, 1], ['r'])
    expect(grid[0][0]).toBe("S")
  })

  it('Changes direction to West when facing South and receiving the "r" command.', () => {
    expect(rover([0, 0], 'S', [1, 1], ['r'])[0][0]).toBe("W")
  })

  it('Changes direction to North when facing West and receiving the "r" command.', () => {
    expect(rover([0, 0], 'W', [1, 1], ['r'])[0][0]).toBe("N")
  })

  it('Changes direction to West when facing North and receiving the "l" command.', () => {
    expect(rover([0, 0], 'N', [1, 1], ['l'])[0][0]).toBe("W")
  })

  it('Changes direction to North when facing East and receiving the "l" command.', () => {
    expect(rover([0, 0], 'E', [1, 1], ['l'])[0][0]).toBe("N")
  })

  it('Changes direction to East when facing South and receiving the "l" command.', () => {
    expect(rover([0, 0], 'S', [1, 1], ['l'])[0][0]).toBe("E")
  })

  it('Changes direction to South when facing West and receiving the "l" command.', () => {
    expect(rover([0, 0], 'W', [1, 1], ['l'])[0][0]).toBe("S")
  })

  it('The direction the rover is facing changes correctly when it turns more than 360 degrees. ', () => {
    expect(rover([0, 0], 'S', [1, 1], ['l', 'l', 'l', 'l', 'l', 'l'])[0][0]).toBe("N")
  })

  it('When moving to the left, the rover stays in the same position if it encounters the grid\'s limit. ', () => {
    expect(rover([1, 0], 'W', [2, 2], ['f'])[1][0]).toBe("W")
  })

  it('A full set of instructions is completed correctly ', () => {

    const grid = rover([2, 5], 'N', [4, 7], ['l', 'f', 'f', 'l', 'b', 'b', 'b', 'b', 'l', 'f', 'f'])
    const validRow = grid.filter((row) => row.includes('E'))

    expect(validRow.length === 1 && validRow[0][5] === 'E').toBe(true)
  })
})
