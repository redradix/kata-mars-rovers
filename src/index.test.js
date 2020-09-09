const rover = require('./index')

describe('Mars Rovers', () => {


  it('When moving, the rover stays in the same position if it encounters the grid\'s limit. ', () => {
    expect(rover([1, 0], 'W', [2, 2], ['f'])[1][0]).toBe("W")
  })

  it('The direction the rover is facing changes correctly on simple instructions.', () => {
    expect(rover([0, 0], 'E', [1, 1], ['r', 'r'])[0][0]).toBe("W")
  })

  it('The direction the rover is facing changes correctly when it turns more than 360 degrees. ', () => {
    expect(rover([0, 0], 'S', [1, 1], ['l', 'l', 'l', 'l', 'l', 'l'])[0][0]).toBe("N")
  })

  it('A full set of instructions is completed correctly ', () => {

    const grid = rover([2, 5], 'N', [4, 7], ['l', 'f', 'f', 'l', 'b', 'b', 'b', 'b', 'l', 'f', 'f'])
    const validRow = grid.filter((row) => row.includes('E'))

    expect(validRow.length === 1 && validRow[0][5] === 'E').toBe(true)
  })
})
