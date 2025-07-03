import React from 'react'

const UserStats = () => {
    return (
        <div className='flex flex-col justify-center gap-4 p-4 text-black text-lg'>
            <div className='text-center text-4xl'>Dashboard</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
                <div className='text-[#05386B] p-4 rounded-lg shadow-lg shadow-gray-800 flex flex-col items-center gap-16 min-w-[255px] min-h-[280px] hover:scale-110 transition-all duration-300 bg-[#2F82FF]'>
                    <h2 className='text-3xl font-semibold'>Total Tickets</h2>
                    <p className='text-7xl font-semibold'>12</p>
                </div>
                <div className='text-[#05386B] p-4 rounded-lg shadow-lg shadow-gray-800 flex flex-col items-center gap-16 min-w-[255px] min-h-[280px] hover:scale-110 transition-all duration-300 bg-[#0BFF68]'>
                    <h2 className='text-3xl font-semibold'>Open Tickets</h2>
                    <p className='text-7xl font-semibold'>45</p>
                </div>
                <div className='text-[#05386B] p-4 rounded-lg shadow-lg shadow-gray-800 flex flex-col items-center gap-16 min-w-[255px] min-h-[280px] hover:scale-110 transition-all duration-300 bg-[#FE594E]'>
                    <h2 className='text-3xl font-semibold'>Closed Tickets</h2>
                    <p className='text-7xl font-semibold'>75</p>
                </div>
                <div className='text-[#05386B] p-4 rounded-lg shadow-lg shadow-gray-800 flex flex-col items-center gap-16 min-w-[255px] min-h-[280px] hover:scale-110 transition-all duration-300 bg-[#FCFF6C]'>
                    <h2 className='text-3xl font-semibold'>Pending Tickets</h2>
                    <p className='text-7xl font-semibold'>10</p>
                </div>
            </div>
        </div>
    )
}

export default UserStats
