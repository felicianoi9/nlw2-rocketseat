import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import backIcon from "../../Assets/images/icons/back.svg";
import logoImg from "../../Assets/images/logo.svg";

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/" > 
                        <img src={backIcon} alt=""/>
                    </Link> 
                    <img src={logoImg} alt=""/>
                </div>
                <div className="header-content">
                    <strong>Estes são os proffys disponíveis</strong>
                </div>
            </header>
        </div>
    );
}

export default TeacherList;