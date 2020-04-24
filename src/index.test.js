const move = require('./index')

describe('Mars Rovers', () => {
  const samples = [
    {
      title: "Move FORWARD when direction is NORTH should increase Y",
      input: [[1, 1, 'N'], 'f', 7],
      output: [1, 2, 'N']
    },
    {
      title: "Move FORWARD when direction is NORTH should increase Y",
      input: [[2, 2, 'N'], 'f', 7],
      output: [2, 3, 'N']
    },
    {
      title: "Move FORWARD when direction is EAST should increase X",
      input: [[1, 1, 'E'], 'f', 7],
      output: [2, 1, 'E']
    },
    {
      title: "Move FORWARD when direction is EAST should increase X",
      input: [[2, 2, 'E'], 'f', 7],
      output: [3, 2, 'E']
    },
    {
      title: "Move FORWARD when direction is SOUTH should decrease Y",
      input: [[1, 1, 'S'], 'f', 7],
      output: [1, 0, 'S']
    },
    {
      title: "Move FORWARD when direction is SOUTH should decrease Y",
      input: [[2, 2, 'S'], 'f', 7],
      output: [2, 1, 'S']
    },
    {
      title: "Move FORWARD when direction is WEST should decrease X",
      input: [[1, 1, 'W'], 'f', 7],
      output: [0, 1, 'W']
    },
    {
      title: "Move FORWARD when direction is WEST should decrease X",
      input: [[2, 2, 'W'], 'f', 7],
      output: [1, 2, 'W']
    },
    {
      title: "Move BACKWARD when direction is NORTH should decrease Y",
      input: [[1, 1, 'N'], 'b', 7],
      output: [1, 0, 'N']
    },
    {
      title: "Move BACKWARD when direction is NORTH should decrease Y",
      input: [[2, 2, 'N'], 'b', 7],
      output: [2, 1, 'N']
    },
    {
      title: "Move BACKWARD when direction is EAST should decrease X",
      input: [[1, 1, 'E'], 'b', 7],
      output: [0, 1, 'E']
    },
    {
      title: "Move BACKWARD when direction is EAST should decrease X",
      input: [[2, 2, 'E'], 'b', 7],
      output: [1, 2, 'E']
    },
    {
      title: "Move BACKWARD when direction is SOUTH should increase Y",
      input: [[1, 1, 'S'], 'b', 7],
      output: [1, 2, 'S']
    },
    {
      title: "Move BACKWARD when direction is SOUTH should increase Y",
      input: [[2, 2, 'S'], 'b', 7],
      output: [2, 3, 'S']
    },
    {
      title: "Move BACKWARD when direction is WEST should increase X",
      input: [[1, 1, 'W'], 'b', 7],
      output: [2, 1, 'W']
    },
    {
      title: "Move BACKWARD when direction is WEST should increase X",
      input: [[2, 2, 'W'], 'b', 7],
      output: [3, 2, 'W']
    },
    {
      title: "Turn LEFT when direction is NORTH should set direction to WEST",
      input: [[0, 0, 'N'], 'l', 7],
      output: [0, 0, 'W']
    },
    {
      title: "Turn LEFT when direction is SOUTH should set direction to EAST",
      input: [[0, 0, 'S'], 'l', 7],
      output: [0, 0, 'E']
    },
    {
      title: "Turn LEFT when direction is EAST should set direction to NORTH",
      input: [[0, 0, 'E'], 'l', 7],
      output: [0, 0, 'N']
    },
    {
      title: "Turn LEFT when direction is WEST should set direction to SOUTH",
      input: [[0, 0, 'W'], 'l', 7],
      output: [0, 0, 'S']
    },
    {
      title: "Turn RIGHT when direction is NORTH should set direction to EAST",
      input: [[0, 0, 'N'], 'r', 7],
      output: [0, 0, 'E']
    },
    {
      title: "Turn RIGHT when direction is SOUTH should set direction to WEST",
      input: [[0, 0, 'S'], 'r', 7],
      output: [0, 0, 'W']
    },
    {
      title: "Turn RIGHT when direction is EAST should set direction to SOUTH",
      input: [[0, 0, 'E'], 'r', 7],
      output: [0, 0, 'S']
    },
    {
      title: "Turn RIGHT when direction is WEST should set direction to NORTH",
      input: [[0, 0, 'W'], 'r', 7],
      output: [0, 0, 'N']
    },
    {
      title: "Move with multiple commands",
      input: [[0, 0, 'N'], 'ffffbbf', 7],
      output: [0, 3, 'N']
    }, 
    {
      title: "Turn with multiple commands", 
      input: [[0, 0, 'N'], 'rlrlllr', 7],
      output: [0, 0, 'W']
    },
    {
      title: "Move and turn with multiple commands",
      input: [[0, 0, 'E'], 'fffrffblfrb', 7],
      output: [4, 2, 'S']
    }, 
    {
      title: "Move shouldn't be allowed when it's going out of limit",
      input: [[0, 0, 'W'], 'f', 7],
      output: [0, 0, 'W']
    },
    {
      title: "Skips unknown commands",
      input: [[0, 0, 'W'], 'z', 7],
      output: [0, 0, 'W']
    }
  ]

  samples.forEach(sample => {
    it(sample.title, () => {
      expect(move(...sample.input)).toEqual(sample.output)
    })
  })

})