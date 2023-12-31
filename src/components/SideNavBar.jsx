import React, { useState } from "react";
import './css/SideNavBar.css';
import home from '../assets/home.png'
import aboutme from '../assets/aboutme.png'
import work_exp from '../assets/work.png'
import projects from '../assets/projects.png'
import contact from '../assets/contact.png'
import { NavLink } from "react-router-dom";

export const SideNavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);

    return (
        <div className="container">
            <div className="sidebar-container">
                <div className="logo">
                <img src={home} alt="Home"/>
                </div>
                <div className="logo">
                <img src={aboutme} alt="About Me"/>
                </div>
                <div className="logo">
                <img src={work_exp} alt="Work"/>
                </div>
                <div className="logo">
                <img src={projects} alt="Projects"/>
                </div>
                <div className="logo">
                <img src={contact} alt="Contacts"/>
                </div>
            </div>
        </div>
    )
}