import React from 'react'

const WinnerCard = (props) => {
  return (
    <div id='winnerCard'>
      {props.winStatus} won!!!
    </div>
  )
}

export default WinnerCard
