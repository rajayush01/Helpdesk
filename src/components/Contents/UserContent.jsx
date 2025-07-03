import React from 'react'
import UserStats from '../UserStats'
import NewTicket from '../NewTicket'
import MyTicketUser from '../MyTicketUser'

const UserContent = ({ section }) => {
  return (
    <div className="text-xl font-medium">
      {section === "Dashboard" && <div><UserStats/></div>}
      {section === "New Ticket" && <div><NewTicket/></div>}
      {section === "My Ticket" && <div><MyTicketUser/></div>}
    </div>
  )
}

export default UserContent
