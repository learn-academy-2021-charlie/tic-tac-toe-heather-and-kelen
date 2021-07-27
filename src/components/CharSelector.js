import React from 'react'

const CharSelector = props => {
  return(
    <>
      <input
        type='text'
        id={props.id}
        onChange={props.handleChange}
      />
    </>
  )
}

export default CharSelector
