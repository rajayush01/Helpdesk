import { LogOut } from 'lucide-react'
import bell from "../assets/bell.png"
import profile from "../assets/profile.png"
import { useNavigate } from 'react-router-dom'
const DashboardHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  }
  return (
    <div className='bg-[#55D6C2] flex flex-row justify-between items-center p-4 min-h-[90px]'>
      <div className='text-white italic text-4xl font-semibold'>Helpdesk</div>
      <div className='flex flex-row items-center justify-between gap-5'>
        <div className='flex flex-row border-2 border-black rounded-md cursor-pointer'>
            <div className='border-2 border-black bg-black text-white font-semibold text-sm px-2'>BM</div>
            <div className='border-r-4 border-black font-semibold text-sm px-3'>BI</div>
        </div>
        <div>
            <img src={bell} alt="bell" className='h-6 cursor-pointer'/>
        </div>
        <div>
            <img src={profile} alt="profile" className='h-6 cursor-pointer'/>
        </div>
        <div onClick={handleLogout} className='cursor-pointer'><LogOut/></div>
      </div>
    </div>
  )
}

export default DashboardHeader
