import React from 'react'
import "./input.css"

const Input = (props) => {
  return (
    <div className="f-input">
      <input placeholder={props.placeholder} type="text" />
    </div>
  )
}

export default Input
