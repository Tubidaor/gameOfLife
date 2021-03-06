import React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gridStart: [],
      gridInitialState: [],
      gridRun: [],
      screenHeight: null,
      screenWidth: null,
    }
  }
  

  pupulateArray = (numCol, numRow) => {
    let array = []
    let styleAlive = {
      backgroundColor: "white"
    }
    let styleDead = {
      backgroundColor: "black"
    }
    for(let i = 0; i < numCol; i++) {
      let fill =[]
      for(let j = 0; j < numRow; j++) {
        fill.push({
          id:`${i}${j}`,
          state: 0,
          alive: () => {
          return (
            <div className={`node div${i}${j}`} style={styleAlive}/>
          )},
          dead: () => {
            return (
              <div className={`node div${i}${j}`} style={styleDead}/>
            )},
        })
      }
      array.push(fill)
      this.setState({
        gridStart: array,
      })
  }
  }

  randomStart = () => {
    let { gridStart } = this.state
    let gridInitialState = []
    let styleAlive = {
      backgroundColor: "white"
    }
    let styleDead = {
      backgroundColor: "black"
    }

    for(let i = 0; i < gridStart.length; i++) {
      let preGrid = []
  
      for(let j = 0; j < gridStart[i].length; j++) {
        let coin = Math.floor(Math.random() * 2);
        if(coin === 0) {
          preGrid.push(
            {
              id:`${i}${j}`,
              state: 0,
              alive: () => {
              return (
                <div className={`node div${i}${j}`} style={styleAlive}/>
              )},
              dead: () => {
                return (
                  <div className={`node div${i}${j}`} style={styleDead}/>
                )},
            }
        )
        }
        if(coin === 1) {
          preGrid.push(
          {
            id:`${i}${j}`,
            state: 1,
            alive: () => {
            return (
              <div className={`node div${i}${j}`} style={styleAlive}/>
            )},
            dead: () => {
              return (
                <div className={`node div${i}${j}`} style={styleDead}/>
              )},
          })
        }
        
      }
      gridInitialState.push(preGrid)
    }
    this.setState({
      gridInitialState
    })

  }

  playLife = () => {
  
  let cell = this.state.gridInitialState
  let emptyGrid = []

  function sum(row,col) {
    let nTopL = cell[row-1] === undefined|| cell[row-1][col-1] === undefined? 0: cell[row-1][col-1].state;
    let nTop = cell[row-1] === undefined || cell[row-1][col] === undefined? 0: cell[row-1][col].state;
    let nTopR = cell[row-1] === undefined || cell[row-1][col+1] === undefined? 0: cell[row-1][col+1].state;
    let nLeft = cell[row] === undefined || cell[row][col-1] === undefined? 0: cell[row][col-1].state;
    let nRight = cell[row] === undefined || cell[row][col+1] === undefined? 0: cell[row][col+1].state;
    let nBotL = cell[row+1] === undefined || cell[row+1][col-1] === undefined? 0: cell[row+1][col-1].state;
    let nBot = cell[row+1] === undefined || cell[row+1][col] === undefined? 0: cell[row+1][col].state;
    let nBotR = cell[row+1] === undefined || cell[row+1][col+1] === undefined? 0: cell[row+1][col+1].state;
    const neighbors = [nTopL, nTop, nTopR, nLeft, nRight, nBotL, nBot, nBotR]
    let sum = 0
    
    neighbors.filter(neigh => {return neigh !== undefined})

    for(let i = 0; i < neighbors.length; i++) {
      sum = sum + neighbors[i]
    }

    return sum
  }
  let styleAlive = {
    backgroundColor: "white"
  }
  let styleDead = {
    backgroundColor: "black"
  }
  for(let i = 0; i < cell.length; i++) {
    let preGrid = []
    for(let j = 0; j < cell[i].length; j++) {

      if(sum(i,j) < 2) {
        preGrid.push(
          {
            id:`${i}${j}`,
            state: 0,
            alive: () => {
            return (
              <div className={`node div${i}${j}`} style={styleAlive}/>
            )},
            dead: () => {
              return (
                <div className={`node div${i}${j}`} style={styleDead}/>
              )},
          }
      )
    }
    if(sum(i,j) === 3 ) {
      preGrid.push(
        {
          id:`${i}${j}`,
          state: 1,
          alive: () => {
          return (
            <div className={`node div${i}${j}`} style={styleAlive}/>
          )},
          dead: () => {
            return (
              <div className={`node div${i}${j}`} style={styleDead}/>
            )},
        }
    )
    }
    if(sum(i,j) === 2 && cell[i][j].state === 1) {
      preGrid.push(
        {
          id:`${i}${j}`,
          state: 1,
          alive: () => {
          return (
            <div className={`node div${i}${j}`} style={styleAlive}/>
          )},
          dead: () => {
            return (
              <div className={`node div${i}${j}`} style={styleDead}/>
            )},
        }
    )
    }
    if(sum(i,j) > 3) {
      preGrid.push(
        {
          id:`${i}${j}`,
          state: 0,
          alive: () => {
          return (
            <div className={`node div${i}${j}`} style={styleAlive}/>
          )},
          dead: () => {
            return (
              <div className={`node div${i}${j}`} style={styleDead}/>
            )},
        }
    )
    } 
    if(sum(i,j) === 2 && cell[i][j].state === 0) {
      preGrid.push(
        {
          id:`${i}${j}`,
          state: 0,
          alive: () => {
          return (
            <div className={`node div${i}${j}`} style={styleAlive}/>
          )},
          dead: () => {
            return (
              <div className={`node div${i}${j}`} style={styleDead}/>
            )},
        }
    )
    }
  }
  emptyGrid.push(preGrid)
  this.setState({
    gridInitialState: emptyGrid
  })
  }
  this.grid(emptyGrid)
}

grid = (array) => {
    let gridDiv = []
    for(let i = 0; i < array.length; i++) {
      let cell = []
      for(let j = 0; j < array[i].length; j++){
        if(array[i][j].state === 1) {
        cell.push(array[i][j].alive())
        }
        if(array[i][j].state === 0) {
        cell.push(array[i][j].dead())
        }
      }
      gridDiv.push(cell)
    }
    this.setState({
      gridRun: gridDiv,
    })
}

start = () => {
  this.continuousPlay = setInterval(this.playLife, 1000)
}
stop = () => { 
  clearInterval(this.continuousPlay)
}

componentDidMount() {
  let height = window.innerHeight
  let width = window.innerWidth
  let rows = () => {
    if(width/height > 1.5) {
      return Math.floor((window.innerHeight-150)/10)
    }
    return Math.floor((width-20)/10)
  }
  let cols = () => {
    if(width/height > 1.5) {
      return Math.floor((width-100)/10)
    }
    return rows ()
  }
  this.setState({
    screenHeight: rows() * 10,
    screenWidth: cols() * 10,
  })
  this.pupulateArray(rows(), cols())
  console.log(rows(), cols())
}
  render() {
  let style = {
    width: this.state.screenWidth,
    height: this.state.screenHeight,
  }

  return (
    <div className="App">
      <h1>John Conway's Game of Life</h1>
      <div className="buttonsContainer">
        <button className={"randomStart"} onClick={this.randomStart} > Random State </button>
        <button onClick={this.start}> Start </button>
        <button onClick={this.stop}> Stop </button>
        <button onClick={this.playLife}> Step </button>
      </div>
      <div className="gridContainer" style={style}>
        {this.state.gridRun}
      </div>
    </div>
  );
  }
}

