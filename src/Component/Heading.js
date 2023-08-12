import React from 'react';
import "./heading.css";

function Heading(props) {
    const {heading , para} = props;
  return (
    <div className='parent-div'>
      <p className='heading'>{heading}</p>
      <p className='sub-heading'>{para}</p>
    </div>
  )
}

export default Heading
