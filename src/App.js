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
    let { squares, player } = this.state
    if(!squares[index]){
      squares[index] = player
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
            return <Square index={index} key={index} value={value} handleGameplay={this.handleGameplay}/>
          })}
        </div>
      </>
    )
  }
}
export default App
