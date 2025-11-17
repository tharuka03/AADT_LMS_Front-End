import React, { useState } from 'react'
import EnterEmail from './EnterEmail';
import EnterPhone from './EnterPhone';
import EnterOTP from './EnterOTP';

function ForgotPasswordArea({setForgotPassword}) {

    const[screenStatus, setScreenStatus] = useState('enterEmail');

    console.log(screenStatus);

  return (
    <div className='fixed inset-0 bg-[#00000066] backdrop-blur-xs flex items-center justify-center'>
        <div className='relative bg-white p-8 aspect-auto rounded-lg w-6/7 md:w-4/7 lg:w-3/7 xl:w-2/7'>
            <div onClick={() => setForgotPassword(false)} className='absolute cursor-pointer top-3 right-3 bg-red-100 p-2 rounded-full'>
                <i className="fi fi-br-cross flex text-xs text-red-600"></i>
            </div>  
            <h2 className='text-xl font-medium mb-4'>Forgot Password</h2>
            {screenStatus === 'enterEmail' && <EnterEmail setScreenStatus={setScreenStatus} />}
            {screenStatus === 'enterPhone' && <EnterPhone setScreenStatus={setScreenStatus} />}
            {screenStatus === 'enterOTP' && <EnterOTP setScreenStatus={setScreenStatus} />}
        </div>
        
    </div>
  )
}

export default ForgotPasswordArea