import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const nav = useNavigate();
  const[username,setUserName] = ("");
  const[pass,setPass] =("");
  const[email,setEmail] = ("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(async () => {
      nav("/");
      setIsLoading(false);
    }, 1000);
  }
  return (
    <div>
      <div className='bg-[#55D6C2] h-screen flex justify-center items-center'>
      <div className='bg-white bg-opacity-50 flex flex-col justify-center items-center gap-10 min-w-[750px] min-h-[500px]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='font-bold italic text-[48px]'>Helpdesk System</div>
          <div className='font-semibold'>Sign up here</div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='space-y-5 flex flex-col items-center justify-center'>
            <div>
              <input 
                type="username"
                placeholder='Username'
                required
                className='min-w-[450px] p-2 rounded-md border-2 border-black/50'
                value={username}
                onChange={e=>setUserName(e.target.value)}
                />
            </div>
            <div>
              <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="min-w-[450px] p-2 rounded-md border-2 border-black/50"
                  value={pass}
                  onChange={e=>setPass(e.target.value)}
                />
            </div>
            <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="min-w-[450px] p-2 rounded-md border-2 border-black/50"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#296EF2] text-white px-16 py-2 rounded-lg"
            >              
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing Up...
                  </>
                ) : (
                  <>
                    Sign Up
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
        <div className='flex justify-between min-w-[450px]'>
          <div className='text-red-500'>Forgot Password</div>
          <div>Sign Up</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
