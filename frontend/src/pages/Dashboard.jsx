import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css"

import { FaUserAlt, FaWarehouse, FaDollarSign, FaRegListAlt, FaHammer, FaSearch} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

function Dashboard() {
    document.title = "Login - DJK Joias";
    
    const navigation = useNavigate();
    
    useEffect(() => {
        const token = Cookies.get("token");

        if(!token)
            navigation("/");
        
    }, []);

    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-headerSection">
                    <h1 className="dashboard-trademark">DJK Joias</h1>
                    <button className="dashboard-profileButton">
                        <FaUserAlt />
                        <br></br>
                        undefined
                    </button>
                </div>
                <div className="dashboard-headerSection-alt">
                    <div className="dashboard-input-section">
                        <input placeholder="Pesquise algo legal"/>
                        <button>
                            <FaSearch className="dashboard-searchIcon"/>
                         </button>
                    </div>
                </div>
                <div className="dashboard-headerSection-bottom" style={{ paddingLeft: '10vw', paddingRight: '10vw'}}>
                    <button className="dashboard-iconsButton active">
                        <FaWarehouse className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton">
                        <FaDollarSign className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton">
                        <FaHammer className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton">
                        <IoSettings className="dashboard-Icons" />
                    </button>
                    <button className="dashboard-iconsButton">
                        <FaRegListAlt className="dashboard-Icons" />
                    </button>
                </div>
            </div>

            <main className="dashboard-main">
                <button>
                    Consultar entradas e saídas
                </button>
                <button>
                    Controle de vendas
                </button>
                <button>
                    Controle de peças
                </button>
                <button>
                    Compra de materiais
                </button>                
                <button>
                    Entrega de serviço
                </button>
            </main>

            <footer className="dashboard-footer">
                <button style={{fontWeight:"bold"}}>Sair do sistema</button>
            </footer>
        </>
    );
}

export default Dashboard;