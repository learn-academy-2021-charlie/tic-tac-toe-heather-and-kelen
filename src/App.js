import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import WinnerCard from './components/WinnerCard'
import ResetButton from './components/ResetButton'
import CharSelector from './components/CharSelector'
import TurnIndicator from './components/TurnIndicator'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      winStatus: '',
      player1: 'X',
      player2: 'O',
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
    let { squares, player, player1, player2 } = this.state
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
      if(squares.every((e) => e !== '') && !winStatus){winStatus = 'Draw'}
      player === player1 ? player = player2 : player = player1
      this.setState({
        squares: squares,
        player: player,
        winStatus: winStatus
      })
    }
  }

  handleReset = () => {
    this.setState({
      squares: ['', '', '', '', '', '', '', '', ''],
      player: 'X',
      winStatus: ''
    })
  }

  handleChange = e => {
    let { id, value } = e.target
    console.log(typeof value)
    console.log(/^#[0-9A-F]{6}$/i.test(value))
    if(/\p{Emoji}/u.test(value) || /^#[0-9A-F]{6}$/i.test(value)){
      value = value.split()
    }
    if(id === 'player1'){
      this.setState({player1: value[0], player: value[0]})
    }else if(id === 'player2'){
      this.setState({player2: value[0]})
    }
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id='playerInput'>
          <h2>Player 1:</h2>
          <CharSelector value={this.state.player1} handleChange={this.handleChange} id='player1'/>
          <h2>Player 2:</h2>
          <CharSelector value={this.state.player2} handleChange={this.handleChange} id='player2'/>
        </div>
        <br/>
        <TurnIndicator player={this.state.player}/>
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
