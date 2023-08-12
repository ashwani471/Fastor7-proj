import React from 'react'
import "./button.css"

function Button({text,disabled , onClick}) {
  return (
    <>
    <div className='btn_style'>
      <button 
      disabled = {!!disabled}
      onClick={onClick}
       >{text}</button>
    </div>
    </>
  )
}

export default Button
