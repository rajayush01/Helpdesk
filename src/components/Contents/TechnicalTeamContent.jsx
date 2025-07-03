import Performance from '../Performance'
import MyTicket from '../MyTicket'
import UserStats from '../UserStats'
import DashboardCards from '../DashboardCards'

const TechnicalTeamContent = ({ section }) => {
  return (
    <div>
      <div className="text-xl font-medium">
      {section === "Dashboard" && <div className='flex flex-col'><UserStats/><DashboardCards/></div>}
      {section === "My Ticket" && <div><MyTicket/></div>}
      {section === "Performance" && <div><Performance/></div>}
    </div>
    </div>
  )
}

export default TechnicalTeamContent
