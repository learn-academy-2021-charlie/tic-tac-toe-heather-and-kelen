import React, { Component } from 'react'

class TurnIndicator extends Component {
  render(){
    return(
      <div id='turnIndicator'>
        {this.props.player}, it's your turn!
      </div>
    )
  }
}

export default TurnIndicator
