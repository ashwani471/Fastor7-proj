import React from 'react'
import "./button2.css"

function Button2({text,disabled,onClick}) {
  return (
    <>
    <div className='btn_style'>
      <button disabled = {!!disabled} onClick={onClick} >{text}</button>
    </div>
    <div className= "para_Code">
      <p>Didn’t received code? <a>Resend</a> </p>
    </div>
    </>
  )
}

export default Button2
