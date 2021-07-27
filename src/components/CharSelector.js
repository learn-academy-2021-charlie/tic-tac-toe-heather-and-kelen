import React from 'react'

const CharSelector = props => {
  return(
    <>
      <input
        type='text'
        id={props.id}
        maxLength={1}
        onChange={props.handleChange}
      />
    </>
  )
}

export default CharSelector
