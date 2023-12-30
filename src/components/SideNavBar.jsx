import React, { useState } from "react";
import './css/SideNavBar.css';
import home_icon from '../assets/home_icon.svg'
import about_me from '../assets/about_me.svg'
import work_exp from '../assets/work_exp.svg'
import projects from '../assets/projects.svg'
import contact from '../assets/contact.svg'
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
                <img src={home_icon} alt="Home"/>
                </div>
                <div className="logo">
                <img src={about_me} alt="About Me"/>
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