import React from "react";
import '/src/CSS/Header.css'

const Header = () => {

    return (
        <div className="header">
            <img
                className="icon"
                src='/src/assets/Icons/icon2.png'
                alt="Icon Preset" />

            <h3>RecipeFinder</h3>
        </div>
    )
}

export default Header