import React, { useState } from 'react';
import axios from "axios";
import Heading from '../Component/Heading';
import Input from '../Component/Input';
import Button from '../Component/Button';
import { useNavigate } from 'react-router-dom';


function MobileNumber({sendDataToparent}) {
    const heading = "Enter Your Mobile Number";
    const para = "We will send you the 4 digit verification conde";
    const text = "Send Code";
    const [mobile , setMobile] = useState("");
    const navigate = useNavigate();
    // const [isValid , setIsValid] = useState(true);
    // const [focus , setFocus] = useState(false);

    const handleNumber = (e) => {
      const inputValue = e.target.value;
      setMobile(inputValue);
      console.log(inputValue);
     
      
    };

    // const handleFocus = () => {
    //   console.log(focus);
    //   if(mobile.length === 10){
    //     setFocus(false);
    //   }else{
    //     setFocus(true);
    //   }
    // }

    // const handleBlur = () =>{
    //   setFocus(false);
    // }

   const getNumber = async() =>{
    
    const data = {};
    data.number = mobile;
    sendDataToparent(data);
    try{
    const apiRes = await axios.post("https://staging.fastor.in/v1/pwa/user/register", 
    {
      phone:mobile,
      dial_code:"+91"
    })
    // const {status , status_code , data} = apiRes;
    // if(status === "Success" || status_code === 200 || data === "otp sent"){
      
    // } 
    navigate("/otp");
  }
  catch(err){
     console.log(err);
  }
  }

  return (
    <>
        <Heading
          heading = {heading} 
          para = {para}
        />
        <Input 
          onChange={handleNumber} 
          type = "number" 
          value = {mobile} 
          // onFocus={handleFocus}
          // onBlur = {handleBlur}
        />
        <Button 
          text = {text}
          // disabled = {isValid}
          onClick = {getNumber}
        />
    </>
  )
}

export default MobileNumber
