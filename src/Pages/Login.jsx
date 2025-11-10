import React, { useState } from 'react'
import { primaryStyles } from '../Styles/primaryStyles';

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[forgotPassword, setForgotPassword] = useState(false);

    const loginDetails = {
        email,
        password
    }

    console.log(loginDetails);

  return (
    <div className='w-full bg-blue-600 h-screen flex items-center justify-center select-none'>
        <div className='flex flex-col w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4 py-10 gap-5 justify-center items-center rounded-2xl bg-white '>
        <h1 className='text-gray-900 text-lg font-bold'>Login Form</h1>
            <form className='flex flex-col gap-4 p-4 items-center w-[90%] justify-center'>
                <input
                    className={primaryStyles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    className={primaryStyles.input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className={primaryStyles.AuthButtons} type="submit">Login</button>
                <a className='text-right cursor-pointer self-end text-sm italic text-red-600' onClick={() => setForgotPassword(true)}>Forgot Password?</a>
            </form>
        </div>
        {forgotPassword && (
            <div className='fixed inset-0 bg-[#00000066] backdrop-blur-xs flex items-center justify-center'>
                <div className='bg-white p-6 rounded-lg'>
                    <h2 className='text-lg font-bold mb-4'>Forgot Password</h2>
                    <p className='mb-4'>Please contact support to reset your password.</p>
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <button className={primaryStyles.AuthButton2}>Reset with Email</button>
                        <button className={primaryStyles.AuthButton2} onClick={() => setForgotPassword(false)}>Contact Admin</button>
                    </div>
                    
                </div>
            </div>
        )}
    </div>
  )
}

export default Login