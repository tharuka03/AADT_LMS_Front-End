import React, { useState } from 'react'
import { primaryStyles } from '../../Styles/primaryStyles';
import { useNavigate } from 'react-router-dom';

function LoginFormArea({setForgotPassword}) {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const loginDetails = {
      email,
      password
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    
  };

  console.log(loginDetails);

  return (
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
                <button onClick={handleSubmit} className={primaryStyles.AuthButtons} type="submit">Login</button>
                <a className='text-right cursor-pointer self-end text-sm italic text-red-600' onClick={() => setForgotPassword(true)}>Forgot Password?</a>
            </form>
        </div>
  )
}

export default LoginFormArea