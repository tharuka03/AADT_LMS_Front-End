import React, { useRef, useState } from 'react'
import { primaryStyles } from '../../Styles/primaryStyles'

function EnterOTP() {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    const inputRefs = useRef([])

    const handleChange = (element, index) => {
        if (/^\d$/.test(element.value) || element.value === '') {
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        
        // Move focus
        if (element.value !== '' && index < 5) {
            inputRefs.current[index + 1].focus();
        }
        }
    };

    const handleKeyDown = (e, index)=> {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
        inputRefs.current[index - 1].focus();
        }
    };
    
    const handleContinue = () => {
        if (otp) {
            setScreenStatus('enterPassword');
        }
    };

  return (
    <>
        <div className='flex flex-col m-auto text-md w-3/4 text-gray-500 mb-4'>
            <p>Please enter your phone number.</p>
            <p>+94******046</p>
        </div>    
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex gap-2.5'>
            {otp.map((data, index) => (
                <input
                key={index}
                maxLength={1} 
                type="text" 
                value={data} 
                onChange={(e) => handleChange(e.target, index)} 
                onKeyDown={(e) => handleKeyDown(e, index)} 
                ref={el => inputRefs.current[index] = el}
                className="border w-1/6 aspect-square border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base text-center" />
            ))}
            </div>
            <button onClick={handleContinue} className={primaryStyles.AuthButtons}>Continue</button>
        </div>
    </>
  )
}

export default EnterOTP