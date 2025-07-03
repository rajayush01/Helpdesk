import React from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = ("");
    return (
        <div className='bg-[#55D6C2] h-screen flex justify-center items-center'>
            <div className='bg-white bg-opacity-50 flex flex-col justify-center items-center gap-10 min-w-[750px] min-h-[500px]'>
                <div className='text-center max-w-[350px] font-medium'>Don’t worry, Enter your email below and we will send you a link to change password.</div>
                <div>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="min-w-[450px] p-2 rounded-md border-2 border-black/50"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </form>
                </div>
                <div className='flex flex-col text-white gap-5'>
                    <button className='bg-[#03CC17] text-white px-16 py-2 rounded-lg'>Submit</button>
                    <button className='bg-[#296EF2] text-white px-16 py-2 rounded-lg'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
