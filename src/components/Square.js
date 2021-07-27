import React, { Component } from 'react'

class Square extends Component{
  handleClick = () => {
    const { handleGameplay, index } = this.props
    handleGameplay(index)
  }
  render(){
    const { value } = this.props
    return(
      <>
        {/^#[0-9A-F]{6}$/i.test(value) && <div
          style={{backgroundColor: `${value}`}}
          onClick={this.handleClick}
          className="square"
        ></div>}
        {!/^#[0-9A-F]{6}$/i.test(value) && <div
          className="square"
          onClick={this.handleClick}>
          {value}</div>}
      </>
    )
  }
}
export default Square
