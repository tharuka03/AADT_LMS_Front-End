import React, { useState } from 'react'
import LoginFormArea from '../Components/Auth/loginFormArea';
import ForgotPasswordArea from '../Components/Auth/ForgotPasswordArea';

function Login() {

    const[forgotPassword, setForgotPassword] = useState(false);
    
  return (
    <div className='w-full bg-blue-600 h-screen flex items-center justify-center select-none'>
        <LoginFormArea setForgotPassword={setForgotPassword} />
        {forgotPassword && <ForgotPasswordArea setForgotPassword={setForgotPassword} />}
    </div>
  )
}

export default Login