import React from "react";

const Header = () => {
    return(
        <header>
            <div className="headerContainer">
                <div className="navLogo">
                    <p>Logo</p>
                </div>
                <div className="navButton">
                    <nav className="navigation">
                        <p>:</p>
                        <ul>
                            <li>New list</li>
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