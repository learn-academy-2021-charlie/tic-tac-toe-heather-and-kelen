import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    const { handleGameplay, value, index } = this.props
    handleGameplay(index)
    console.log(value)
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
