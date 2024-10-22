import React from "react";
import '/src/CSS/Menu.css'

const NavBar = () => {

    return(
        <>
        <div className="menu">
            <ul>
                <li className="menu-item">
                    <a className="menu-link" href="/">
                    <i className="menu-icon tf-icons bx bx-home-circle"> </i>
                    <div>🏠  Dashboard</div>
                     </a>
                </li>
                <li className="menu-item"> 
                    <a className="menu-link" href="/">
                    <i className="menu-icon tf-icons bx bx-home-circle"> </i>
                    <div>🔍  Search</div>
                     </a>
                </li>
                <li className="menu-item">
                    <a className="menu-link" href="/">
                    <i className="menu-icon tf-icons bx bx-home-circle"> </i>
                    <div>ℹ️ About</div>
                     </a>
                </li>
            </ul>
        </div>
        
        
        </>
    )
}

export default NavBar