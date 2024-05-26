import { useState } from "react";
import "./App.css"

function App() {

  let initialMaze = [
    ['wall', 'wall', 'wall', 'wall'],
    ['start', 'path', 'path', 'wall'],
    ['wall', 'wall', 'path', 'wall'],
    ['wall', 'wall', 'path', 'end']
  ]

  function bfs(startNode) {
    let queue = [startNode];
    let visited = new Set(`${start[0]} ${start[1]}`)

    function visitCell([x, y]) {
      console.log(x, y)
    }

    function step() {
      if (queue.length === 0) {
        return
      }


      const [x, y] = queue.shift()
      console.log('step')

      const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
      ];

      for (const [dx, dy] of dirs) {
        nx = x + dx
        ny = y + dy
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited.has(`${nx}, ${ny}`)) {
          visited.add(`${nx}, ${ny}`)
        }
      }
    }
    step()
  }

  const [maze, setMaze] = useState([initialMaze])

  function generateMaze(height, width) {
    let matrix = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        let cell = Math.random()
        row.push("wall")
      }
      matrix.push(row)
    }
    console.log(matrix)


    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];

    function isCellValid(x, y) {
      return y >= 0 && x >= 0 && x < width && y < height && matrix[y][x] === "wall"
    }

    function carvePath(x, y) {
      matrix[y][x] = 'path'

      const directions = dirs.sort(() => Math.random() - 0.5)

      for (let [dx, dy] of directions) {
        const nx = x + dx * 2
        const ny = y + dy * 2
        if (isCellValid(nx, ny)) {
          matrix[y + dy][x + dx] = "path"
          carvePath(nx, ny)
        }
      }
    }
    carvePath(1, 1)

    matrix[1][0] = "start"
    matrix[height - 2][width - 1] = "end"

    setMaze(matrix)
  }

  return (
    <div className="maze-grid">
      <button className={"maze-button"} onClick={() => generateMaze(10, 10)}>Refresh Maze</button>
      <div className={"maze"}>
        {maze.map((row, rowIndex) => (
          <div className="row">
            {row.map((cell, cellIndex) => (
              <div className={`cell ${cell}`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
