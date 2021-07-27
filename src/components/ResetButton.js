import React, { Component } from 'react'

class ResetButton extends Component{
  render(){
    return(
      <button id='resetButton' onClick={this.props.handleReset}>Reset board</button>
    )
  }
}

export default ResetButton
