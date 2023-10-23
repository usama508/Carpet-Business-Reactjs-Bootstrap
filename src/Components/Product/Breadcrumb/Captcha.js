import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
    function onChange(value) {
        console.log("Captcha value:", value);
      }
  return (
    <div>
       Captcha 
        <ReCAPTCHA
        
    sitekey="6Ld2yH4oAAAAADGsk3q1yDR83yjXESaC4awSnDKB"
    onChange={onChange}
  />
        
        
        </div>
  )
}

export default Captcha

