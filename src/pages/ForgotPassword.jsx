import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Add API call here
    alert(`Reset link sent to: ${email}`);
  }

  return (
    <div className='bg-[#55D6C2] h-screen flex justify-center items-center'>
      <div className='bg-white bg-opacity-50 flex flex-col justify-center items-center gap-10 min-w-[750px] min-h-[500px]'>
        <div className='text-center max-w-[350px] font-medium'>
          Don’t worry, Enter your email below and we will send you a link to change password.
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="min-w-[450px] p-2 rounded-md border-2 border-black/50"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </form>
        <div className='flex flex-col text-white gap-5'>
          <button onClick={handleSubmit} className='bg-[#03CC17] px-16 py-2 rounded-lg'>Submit</button>
          <button onClick={() => nav("/")} className='bg-[#296EF2] px-16 py-2 rounded-lg'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
