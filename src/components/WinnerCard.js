import React from 'react'

const WinnerCard = (props) => {
  return (
    <>
      {props.winStatus !== 'Draw' && <div id='winnerCard'>
        {props.winStatus} won!!!
      </div>
      }
      {props.winStatus === 'Draw' && <div id='winnerCard'>
        It's a draw!
      </div>
      }
    </>
  )
}

export default WinnerCard
