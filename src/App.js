import React from 'react';
import './App.css';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      running: false,
    }
  }
  
  handleClick = () => {
    this.setState({
      running: !this.state.running,
    })
  }






//16377

  render() {
    
    let array = []

    function pupulateArray(numCol, numRow) {
      let styleAlive = {
        backgroundColor: "blue"
      }
      let styleDead = {
        backgroundColor: "white"
      }
      for(let i = 0; i < numCol; i++) {
        let fill =[]
        for(let j = 0; j < numRow; j++) {
          fill.push({
            id:`${i}${j}`,
            state: 0,
            alive: () => {
            return (
              <div className={`div div${i}${j}`} style={styleAlive}/>
            )},
            dead: () => {
              return (
                <div className={`div div${i}${j}`} style={styleDead}/>
              )},
          })
        }
        array.push(fill)
        console.log(array)
    }
    }

    function randomStart() {
      for(let i = 0; i < array.length; i++) {
    
        for(let j = 0; j < array[i].length; j++) {
          let coin = Math.floor(Math.random() * 2);
          console.log(coin)
          if(coin === 0) {
            array[i][j].state = 0
          }
          if(coin === 1) {
            array[i][j].state = 1
          }
        }
      }
    }

    function playLife() {

    function sum(col,row) {
      let cell = array
      console.log(cell)
      
      let nTopL = cell[row-1][col-1].state || 0
      let nTop = cell[row-1][col].state || 0
      let nTopR = cell[row-1][col+1].state || 0
      let nLeft = cell[row][col-1].state || 0
      let nRight = cell[row][col+1].state || 0
      let nBotL = cell[row+1][col-1].state || 0
      let nBot = cell[row+1][col].state || 0
      let nBotR = cell[row+1][col+1].state || 0
      const neighbors = [nTopL, nTop, nTopR, nLeft, nRight, nBotL, nBot, nBotR]
      let sum = 0
      
      neighbors.filter(neigh => {return neigh !== undefined})
      console.log(neighbors)
      for(let i = 0; i < neighbors.length; i++) {
        sum = sum + neighbors[i]
      }
      return sum
    }
  
    for(let i = 0; i < array.length; i++) {
  
      for(let j = 0; j < array[i].length; j++) {
        if(sum(j,i) < 2) {
          array[i][j].state = 0
        }
        if(array[i][j].state === 0 && sum(j,i) === 3) {
          array[i][j].state = 1
        }
        if(sum(j,i) > 3) {
          array[i][j].state = 0
        }
      }
    }
    console.log(array)
   console.log("playlifeRan")
  }

  let grid = (array) => {
    while(this.state.running === !false) {
      let gridDiv = []
      for(let i = 0; i < array.length; i++) {
        let cell = []
        for(let j = 0; j < array[i].length; j++){
          if(array[i][j].state === 1) {
          cell.push(array[i][j].alive())
          }
          if(array[i][j].state === 0) {
          cell.push(array[i][j].dead())
          }else { j++}
        }
        gridDiv.push(cell)
      }
      console.log(gridDiv)
      return gridDiv
    }
  }


    pupulateArray(10,10)
    randomStart()

  return (
    <div className="App">
      <button onClick={this.handleClick}>Click me</button>
      <button onClick={playLife}> start </button>
      {grid(array)}
    </div>
  );
  }
}

