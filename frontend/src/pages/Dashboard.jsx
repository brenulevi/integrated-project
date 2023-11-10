import axios from "axios";
import "./Dashboard.css"
import { FaUserAlt } from "react-icons/fa";


function Dashboard() {
    document.title = "Login - DJK Joias";
    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-headerSection">
                    <h1 className="dashboard-trademark">DJK Joias</h1>
                    <button className="dashboard-profileButton">
                        <FaUserAlt className="dashboard-profileIcon"/>
                        <br></br>
                        undefined
                    </button>
                </div>
                <div className="dashboard-headerSection">

                </div>
                <div className="dashboard-headerSection">

                </div>
            </div>

            <main className="dashboard-main"></main>
            
            <footer className = "dashboard-footer">
                <button className = "dashboard-footerButton">Sair do sistema</button>
            </footer>
        </>
    );
}

export default Dashboard;