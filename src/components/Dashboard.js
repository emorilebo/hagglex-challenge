import Header from "./Header"
import MainSection from "./MainSection"
import Sidebar from "./Sidebar"

function Dashboard() {
    return (
        <div>
            <Header/>
            <div className="flex-row md:flex">
                <Sidebar/>
                <MainSection/>
            </div>
        </div>
    )
}

export default Dashboard
