import React from "react";
import NavBar from "../pages/NavBar";
import {Link} from "react-router-dom"
import Logo from"../img/logo.png"
const Header = () => {

    const handleRefresh = () => {
        window.location.reload();
      };
    return(
        <header>
            <div className="headerContainer">
                <div className="navLogo">
                    <a href="/"><img src={Logo} alt="" /></a>
                </div>
                <NavBar/>
                <div className="navButton">
                    <nav className="navigation">
                        <ul>
                            <Link onClick={handleRefresh} style={{ textDecoration: 'none' }}><li>New list</li></Link>
                            <Link to="/History" style={{ textDecoration: 'none' }}><li>History</li></Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}><li>About us</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;