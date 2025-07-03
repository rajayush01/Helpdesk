import { useState } from 'react'
import DashboardHeader from '../../../components/DashboardHeader'
import Footer from '../../../components/Footer'
import TechnicalTeamSidebar from '../../../components/Sidebars/TechnicalTeamSidebar'
import TechnicalTeamContent from '../../../components/Contents/TechnicalTeamContent'

const TechnicalSupport = () => {
  const [activeSection, setActiveSection] = useState("Dashboard")

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />

      <div className="flex flex-1">
        <div className="w-[250px] bg-[#6A6767] bg-opacity-30 border-r">
          <TechnicalTeamSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex-1 overflow-auto p-6 bg-white">
            <TechnicalTeamContent section={activeSection} />
          </div>

          <div className="h-[50px] bg-[#55D6C2]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSupport
