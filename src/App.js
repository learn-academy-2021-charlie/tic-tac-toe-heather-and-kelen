import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      player: 'X'

    }
  }

  handleGameplay = (index) => {
    const winCond = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
    ]
    let { squares, player } = this.state
    if(!squares[index]){
      squares[index] = player
      let playerMoves = squares.map((value, i)=> {
        if(value === player){
          return i
        }
      })
      console.log(playerMoves)
      player === 'X' ? player = 'O' : player = 'X'
      this.setState({
        squares: squares,
        player: player


      })
    }
    console.log('parent')
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id='gameboard'>
          {this.state.squares.map((value, index) => {
            return <Square
            index={index}
            key={index}
            value={value}
            handleGameplay={this.handleGameplay}
            />
          })}
        </div>
      </>
    )
  }
}
export default App
