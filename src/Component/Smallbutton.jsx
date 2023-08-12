import React, { useState } from 'react';
import "./smallbutton.css";
import "./button2.css";
import Button2 from './Button2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { Navigate } from 'react-router-dom';

function Smallbutton({mobileNum}) {
  // const {type , name , maxLength , key , value , onChange , onFocus} = props;
  const [otp , setOtp] = useState(new Array(6).fill(""));
  const text = "Verify";
  const navigate = useNavigate();

  const handleChange = (element , index)=>{
    if(isNaN(element.value)) return false;

    setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)]);

    if(element.nextSibling){
      element.nextSibling.focus();
    }
    // handleData(otp);
  }
  const handleClick=async()=>{
    console.log(otp);
    let otpStr = '';

    otp.map((d)=>{
      otpStr+=d;
    })

    try{
      const {data:apiRes} = await axios.post("https://staging.fastor.in/v1/pwa/user/login",{
        phone: mobileNum,
        otp:otpStr,
        dial_code:"+91",
      })
      const { status , status_code } = apiRes;
      const {token} = apiRes.data;
      console.log(apiRes);
      if(status === "Success" || status_code === 200){
        localStorage.setItem('token', token);
        navigate("/resturant");
      }
    }catch(err){
      console.log(err);
    }
    
  }
  // console.log(otp);
  return (
    <>
    <div className='small_btn'>
     {
      otp.map((data , index)=>{
        return(
        <input 
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={data}
          onChange = {e=>handleChange(e.target , index)}
          onFocus = {e=>e.target.select()}
        />
        )
      })
     }
    
    </div>
    <Button2 
      text = {text} 
      maxlength="1" 
      onClick ={handleClick} 
      />
      </>
  )
}

export default Smallbutton
