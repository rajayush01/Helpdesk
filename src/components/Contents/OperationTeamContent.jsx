import React from 'react'
import UserStats from '../UserStats'
import DashboardCards from '../DashboardCards'
import Performance from '../Performance'
import TicketApproval from '../TicketApproval'
import MyTicket from '../MyTicket'

const OperationTeamContent = ({ section }) => {
  return (
    <div className="text-xl font-medium">
      {section === "Dashboard" && <div className='flex flex-col'><UserStats/><DashboardCards/></div>}
      {section === "Ticket Approval" && <div><TicketApproval/></div>}
      {section === "My Ticket" && <div><MyTicket/></div>}
      {section === "Performance" && <div><Performance/></div>}
    </div>
  )
}

export default OperationTeamContent
