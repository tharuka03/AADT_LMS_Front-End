import React, { useState } from 'react'
import { primaryStyles } from '../../Styles/primaryStyles';

function EnterPhone({setScreenStatus}) {
    
    const [phone, setPhone] = useState('');

    const handleContinue = () => {
        if (phone) {
            setScreenStatus('enterOTP');
        }
    };

  return (
    <>
        <div className='flex flex-col m-auto text-md w-3/4 text-gray-500 mb-4'>
            <p>Please enter your phone number.</p>
            <p>+94******046</p>
        </div>    
        <div className='flex flex-col items-center justify-center gap-4'>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" className={primaryStyles.input} />
            <button onClick={handleContinue} className={primaryStyles.AuthButtons}>Send OTP</button>
        </div>
    </>
  )
}

export default EnterPhone