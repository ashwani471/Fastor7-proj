import React , {useState} from 'react'
import Heading from '../Component/Heading'
import Smallbutton from '../Component/Smallbutton'
import Button2 from '../Component/Button2';

function Otp({mobileNum}) {
    const heading = "OTP Verification";
    const para = "Enter the verification code we just sent on your Mobile Number.";
    
    
    const [otp , setOtp] = useState("");

    // const handleChange = (element , index)=>{
    //   if(isNaN(element.value)) return false;

    //   setOtp([...otp.map((d,idx)=>(idx===index)?element.value:d)]);

    //   if(element.nextSibling){
    //     element.nextSibling.focus();
    //   }
    // }
    const handleData=(data)=>{
      console.log(data);
      const newData = data.map((d , index)=>{
        return d;
      })
      console.log(newData);
    }
    const handleClick = () =>{

    }
  return (
    <div>
      <Heading
        heading = {heading}
        para = {para}
       />

      <Smallbutton 
        handleData = {handleData} 
        mobileNum={mobileNum} 
      />

      
    </div>
  )
}

export default Otp
