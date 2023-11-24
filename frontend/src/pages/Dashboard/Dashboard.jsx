import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Dashboard.css";

import DashboardConfigs from "./dashboard-pages/DashboardConfigs";
import DashboardFinances from "./dashboard-pages/DashboardFinances";
import DashboardProducts from "./dashboard-pages/DashboardProducts";
import DashboardReports from "./dashboard-pages/DashboardReports";
import DashboardServices from "./dashboard-pages/DashboardServices";

import {
  FaUserAlt,
  FaWarehouse,
  FaDollarSign,
  FaRegListAlt,
  FaHammer,
  FaSearch,
} from "react-icons/fa";
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

    const request = axios.get("http://localhost:3333/user/me", {
      withCredentials: true,
    });
    request
      .then((response) => {
        setUsername(
          `${response.data.rows[0].name.split(" ")[0]} ${
            response.data.rows[0].name.split(" ")[response.data.rows[0].name.split(" ").length - 1]
          }`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigation]);

  // ( > - < )
  function underlineButtonPlus(e) {
    const dashboardElements = document.querySelectorAll(
      `.dashboard-iconsButton`
    );

    dashboardElements.forEach((dashboardElement) => {
      dashboardElement.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    setActiveDashboard(parseInt(e.currentTarget.id));
  }

  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-headerSection">
          <h1 className="dashboard-trademark">DJK Joias</h1>
          <button
            className="dashboard-profileButton"
            onClick={() => navigation("/profile")}
          >
            <FaUserAlt />
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
        <div
          className="dashboard-headerSection-bottom"
          style={{ paddingLeft: "10vw", paddingRight: "10vw" }}
        >
          <button
            className="dashboard-iconsButton active"
            onClick={(e) => underlineButtonPlus(e)}
          >
            <FaWarehouse className="dashboard-Icons" />
          </button>
          <button
            className="dashboard-iconsButton"
            onClick={(e) => underlineButtonPlus(e)}
          >
            <FaHammer className="dashboard-Icons" />
          </button>
          <button
            className="dashboard-iconsButton"
            onClick={(e) => underlineButtonPlus(e)}
          >
            <FaDollarSign className="dashboard-Icons" />
          </button>
          <button
            className="dashboard-iconsButton"
            onClick={(e) => underlineButtonPlus(e)}
          >
            <IoSettings className="dashboard-Icons" />
          </button>
          <button
            className="dashboard-iconsButton"
            onClick={(e) => underlineButtonPlus(e)}
          >
            <FaRegListAlt className="dashboard-Icons" />
          </button>
        </div>
      </header>

      {activeDashboard === 0 ? (
        <DashboardProducts />
      ) : activeDashboard === 1 ? (
        <DashboardServices />
      ) : activeDashboard === 2 ? (
        <DashboardFinances />
      ) : activeDashboard === 3 ? (
        <DashboardConfigs />
      ) : (
        <DashboardReports />
      )}

      <footer className="dashboard-footer">
        <button>
          <strong>Sair do sistema</strong>
        </button>
      </footer>
    </>
  );
}

export default Dashboard;
