import React from 'react';
import "./input.css";

function Input(props) {
  const {type , onChange , value , onFocus} = props;
  return (
    <div className='input_div'>
      <input 
        placeholder='Enter Your number'
        type={type}
        onChange={onChange} 
        value={value} 
        onFocus={onFocus}
        maxLength={10}
        />
    </div>
  )
}

export default Input;
