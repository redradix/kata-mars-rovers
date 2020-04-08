const move = require('./index')

describe('Mars Rovers', () => {
  const samples = [
    {
      input: [[1, 1, 'N'], 'f'],
      output: [1, 2, 'N']
    },
    {
      input: [[2, 2, 'N'], 'f'],
      output: [2, 3, 'N']
    },
    {
      input: [[1, 1, 'E'], 'f'],
      output: [2, 1, 'E']
    },
    {
      input: [[2, 2, 'E'], 'f'],
      output: [3, 2, 'E']
    },
    {
      input: [[1, 1, 'S'], 'f'],
      output: [1, 0, 'S']
    },
    {
      input: [[2, 2, 'S'], 'f'],
      output: [2, 1, 'S']
    },
    {
      input: [[1, 1, 'W'], 'f'],
      output: [0, 1, 'W']
    },
    {
      input: [[2, 2, 'W'], 'f'],
      output: [1, 2, 'W']
    },
    {
      input: [[1, 1, 'N'], 'b'],
      output: [1, 0, 'N']
    },
    {
      input: [[2, 2, 'N'], 'b'],
      output: [2, 1, 'N']
    },
    {
      input: [[1, 1, 'E'], 'b'],
      output: [0, 1, 'E']
    },
    {
      input: [[2, 2, 'E'], 'b'],
      output: [1, 2, 'E']
    },
    {
      input: [[1, 1, 'S'], 'b'],
      output: [1, 2, 'S']
    },
    {
      input: [[2, 2, 'S'], 'b'],
      output: [2, 3, 'S']
    },
    {
      input: [[1, 1, 'W'], 'b'],
      output: [2, 1, 'W']
    },
    {
      input: [[2, 2, 'W'], 'b'],
      output: [3, 2, 'W']
    }
  ]

  samples.forEach((sample, i) => {
    it(`With position [${sample.input[0]}] and command "${sample.input[1]}", the output should be [${sample.output}]`, () => {
      expect(move(...sample.input)).toEqual(sample.output)
    })
  })

})