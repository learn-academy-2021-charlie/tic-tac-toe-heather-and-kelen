import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    const { handleGameplay, index } = this.props
    handleGameplay(index)
  }
  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>{this.props.value}</div>
      </>
    )
  }
}
export default Square
