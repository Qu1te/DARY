import React, {useState} from "react";
import "./NavBar.css"
const NavBar = () => {
	const [MenuOpen,setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!MenuOpen)
	}
	return (
		<div className="burger-menu">
			<div className={`burger-icon ${MenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
				<div className="bar1"></div>
        		<div className="bar2"></div>
        		<div className="bar3"></div>
			</div>
			{MenuOpen &&(
				<div className="menu-items">
					<a href="/">New list</a>
					<a href="/">History</a>
					<a href="/">About us</a>
					<a href="/">Sign In</a>
				</div>
			)}
		</div>
	)
}

export default NavBar;