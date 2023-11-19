import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./Dashboard.css"
import DashboardConfigs from "./DashboardConfigs";
import DashboardFinances from "./DashboardFinances";
import DashboardProducts from "./DashboardProducts";
import DashboardReports from "./DashboardReports";
import DashboardServices from "./DashboardServices";

import { FaUserAlt, FaWarehouse, FaDollarSign, FaRegListAlt, FaHammer, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

function Dashboard() {
    document.title = "Login - DJK Joias";

    const navigation = useNavigate();
    
    const [activeDashboard, setActiveDashboard] = useState(0);

    const [username, setUsername] = useState("undefined");

    useEffect(() => {
        const token = Cookies.get("token");

        if (!token) {
            navigation("/");
            return;
        }

        const request = axios.get("http://localhost:3333/user/me", { withCredentials: true });
        request.then(response => {
            setUsername(response.data.rows[0].name);
        }).catch(err => {
            console.log(err);
        });

    }, [navigation]);

    function underlineButton(e) {
        const dashboardElements = document.querySelectorAll(`.dashboard-iconsButton`);

        dashboardElements.forEach(dashboardElement => {
            dashboardElement.classList.remove('active');
        });

        e.currentTarget.classList.add('active');

        setActiveDashboard(parseInt(e.currentTarget.id));
    }

    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-headerSection">
                    <h1 className="dashboard-trademark">DJK Joias</h1>
                    <button className="dashboard-profileButton">
                        <FaUserAlt />
                        <br></br>
                        {username}
                    </button>
                </div>
                <div className="dashboard-headerSection-alt">
                    <div className="dashboard-input-section">
                        <input placeholder="Pesquise algo legal" />
                        <button>
                            <FaSearch className="dashboard-searchIcon" />
                        </button>
                    </div>
                </div>
                <div className="dashboard-headerSection-bottom" style={{ paddingLeft: '10vw', paddingRight: '10vw'}}>
                    <button className="dashboard-iconsButton active" id="0" onClick={(e) => underlineButton(e)}>
                        <FaWarehouse className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton" id="1" onClick={(e) => underlineButton(e)}>
                        <FaHammer className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton" id="2" onClick={(e) => underlineButton(e)}>
                        <FaDollarSign className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton" id="3" onClick={(e) => underlineButton(e)}>
                        <IoSettings className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton" id="4" onClick={(e) => underlineButton(e)}>
                        <FaRegListAlt className="dashboard-Icons" />
                    </button>
                </div>
            </div>

            {activeDashboard === 0 ? <DashboardProducts/> : activeDashboard === 1 ? <DashboardServices/> : activeDashboard === 2 ? <DashboardFinances/> : activeDashboard === 3 ? <DashboardConfigs /> : <DashboardReports/>}

            <footer className="dashboard-footer">
                <button style={{ fontWeight: "bold" }}>Sair do sistema</button>
            </footer>
        </>
    );
}

export default Dashboard;