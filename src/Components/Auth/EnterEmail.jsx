import React, { useState } from 'react'
import { primaryStyles } from '../../Styles/primaryStyles'

function EnterEmail({setScreenStatus}) {
    const [email, setEmail] = useState('');

    const handleContinue = () => {
        if (email) {
            setScreenStatus('enterPhone');
        }
    };
    
  return (
    <>
        <div className='flex justify-center'>
            <p className='text-md w-3/4 text-gray-500 mb-4'>Please enter your email to reset your password.</p>
        </div>    
        <div className='flex flex-col items-center justify-center gap-4'>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className={primaryStyles.input} />
            <button onClick={handleContinue} className={primaryStyles.AuthButtons}>Continue</button>
        </div>
    </>
  )
}

export default EnterEmail