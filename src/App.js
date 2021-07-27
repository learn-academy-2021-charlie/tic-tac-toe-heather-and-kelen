import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import WinnerCard from './components/WinnerCard'
import ResetButton from './components/ResetButton'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      winStatus: ''
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
    let winStatus = ''
    if(!squares[index] && !this.state.winStatus){
      squares[index] = player
      let playerMoves = squares.map((value, currentIndex)=> {
        if(value === player){
          return currentIndex
        } else return null
      })
      for(let j=0; j<winCond.length; j++){
        if(winCond[j].every((arr) => playerMoves.includes(arr))){
          winStatus = player
        }
      }
      player === 'X' ? player = 'O' : player = 'X'
      this.setState({
        squares: squares,
        player: player,
        winStatus: winStatus
      })
    }
    console.log(winStatus)
  }

  handleReset = () => {
    this.setState({
      squares: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      winStatus: ''
    })
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
        {this.state.winStatus && <WinnerCard winStatus={this.state.winStatus}/>}
        {this.state.winStatus && <ResetButton handleReset={this.handleReset}/>}
      </>
    )
  }
}
export default App
