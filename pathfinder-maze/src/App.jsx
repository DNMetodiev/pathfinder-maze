import "./App.css"

function App() {

  let maze = [
    ['wall', 'wall', 'wall', 'wall'],
    ['start', 'path', 'path', 'wall'],
    ['wall', 'wall', 'path', 'wall'],
    ['wall', 'wall', 'path', 'end']
  ]

  return (
    <div>
      {maze.map((row, rowIndex) => (
        <div className="row">
          {row.map((cell, cellIndex) => (
            <div className={`cell ${cell}`}></div>
          ))}
        </div>
      ))}
      {/* <div className={"row"}>
        <div className={"cell wall"}></div>
        <div className={"cell path"}></div>
        <div className={"cell start"}></div>
        <div className={"cell end"}></div>
      </div> */}
    </div>
  )
}

export default App
