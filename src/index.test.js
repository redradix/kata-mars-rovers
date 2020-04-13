const move = require('./index')

describe('Mars Rovers', () => {
  const samples = [
    {
      title: "Move FORWARD when direction is NORTH should increase Y",
      input: [[1, 1, 'N'], 'f'],
      output: [1, 2, 'N']
    },
    {
      title: "Move FORWARD when direction is NORTH should increase Y",
      input: [[2, 2, 'N'], 'f'],
      output: [2, 3, 'N']
    },
    {
      title: "Move FORWARD when direction is EAST should increase X",
      input: [[1, 1, 'E'], 'f'],
      output: [2, 1, 'E']
    },
    {
      title: "Move FORWARD when direction is EAST should increase X",
      input: [[2, 2, 'E'], 'f'],
      output: [3, 2, 'E']
    },
    {
      title: "Move FORWARD when direction is SOUTH should decrease Y",
      input: [[1, 1, 'S'], 'f'],
      output: [1, 0, 'S']
    },
    {
      title: "Move FORWARD when direction is SOUTH should decrease Y",
      input: [[2, 2, 'S'], 'f'],
      output: [2, 1, 'S']
    },
    {
      title: "Move FORWARD when direction is WEST should decrease X",
      input: [[1, 1, 'W'], 'f'],
      output: [0, 1, 'W']
    },
    {
      title: "Move FORWARD when direction is WEST should decrease X",
      input: [[2, 2, 'W'], 'f'],
      output: [1, 2, 'W']
    },
    {
      title: "Move BACKWARD when direction is NORTH should decrease Y",
      input: [[1, 1, 'N'], 'b'],
      output: [1, 0, 'N']
    },
    {
      title: "Move BACKWARD when direction is NORTH should decrease Y",
      input: [[2, 2, 'N'], 'b'],
      output: [2, 1, 'N']
    },
    {
      title: "Move BACKWARD when direction is EAST should decrease X",
      input: [[1, 1, 'E'], 'b'],
      output: [0, 1, 'E']
    },
    {
      title: "Move BACKWARD when direction is EAST should decrease X",
      input: [[2, 2, 'E'], 'b'],
      output: [1, 2, 'E']
    },
    {
      title: "Move BACKWARD when direction is SOUTH should increase Y",
      input: [[1, 1, 'S'], 'b'],
      output: [1, 2, 'S']
    },
    {
      title: "Move BACKWARD when direction is SOUTH should increase Y",
      input: [[2, 2, 'S'], 'b'],
      output: [2, 3, 'S']
    },
    {
      title: "Move BACKWARD when direction is WEST should increase X",
      input: [[1, 1, 'W'], 'b'],
      output: [2, 1, 'W']
    },
    {
      title: "Move BACKWARD when direction is WEST should increase X",
      input: [[2, 2, 'W'], 'b'],
      output: [3, 2, 'W']
    },
    {
      title: "Turn LEFT when direction is NORTH should set direction to WEST",
      input: [[0, 0, 'N'], 'l'],
      output: [0, 0, 'W']
    },
    {
      title: "Turn LEFT when direction is SOUTH should set direction to EAST",
      input: [[0, 0, 'S'], 'l'],
      output: [0, 0, 'E']
    },
    {
      title: "Turn LEFT when direction is EAST should set direction to NORTH",
      input: [[0, 0, 'E'], 'l'],
      output: [0, 0, 'N']
    }
  ]

  samples.forEach(sample => {
    it(sample.title, () => {
      expect(move(...sample.input)).toEqual(sample.output)
    })
  })

})