import { ChevronRight, LayoutDashboard, Tickets, TicketPlus } from 'lucide-react'
import React from 'react'

const UserSidebar = ({ activeSection, setActiveSection }) => {
  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "New Ticket", icon: TicketPlus },
    { label: "My Ticket", icon: Tickets }
  ]

  return (
    <div className='flex flex-col gap-4 p-4 text-black font-semibold text-2xl'>
      {items.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className={`flex items-center gap-3 cursor-pointer ${activeSection === label ? '' : ''}`}
          onClick={() => setActiveSection(label)}
        >
          {/* This keeps ChevronRight space reserved always, only visible when active */}
          <div className="w-6">
            {activeSection === label && <ChevronRight />}
          </div>
          <Icon className="h-7 w-7" />
          <div>{label}</div>
        </div>
      ))}
    </div>
  )
}

export default UserSidebar
