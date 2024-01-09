import React from "react";
import NavBar from "../pages/NavBar";

const Header = () => {
    return(
        <header>
            <div className="headerContainer">
                <div className="navLogo">
                    <p>Logo</p>
                </div>
                <NavBar/>
                <div className="navButton">
                    <nav className="navigation">
                        <ul>
                            <li>:New list</li>
                            <li>History</li>
                            <li>About us</li>
                            <li>Sign In</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;