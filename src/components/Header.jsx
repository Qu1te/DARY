import React from "react";

const Header = () => {
    return(
        <header>
            <div className="Navigation">
                <div className="nav__menu">
                    <div className="nav__logo">
                        Tulo
                    </div>
                    <div className="nav__right">
                        <nav>
                            <ul>
                                <li>Новый лист</li>
                                <li>О нас</li>
                                <li>Войти</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;