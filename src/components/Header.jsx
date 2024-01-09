import React from "react";
import NavBar from "../pages/NavBar";
import {Link} from "react-router-dom"
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
                            <Link><li>:New list</li></Link>
                            <Link><li>History</li></Link>
                            <Link><li>About us</li></Link>
                            <Link><li>Sign In</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;