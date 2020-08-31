import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
import Logo from './mind_passage_logo-white.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./Toolbar.css"

const Toolbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    let handleToggle = () => {
        setMenuOpen(true);
    }

    return (
        <header className="header">
            <nav className="navigation">

                <div className="nav-logo-icon">
                    <Link to="/home"><img src={Logo} alt="Mind Passage Home" /></Link>
                </div>
                <div>
                    <DrawerToggleButton onClick={handleToggle} />
                </div>

            </nav>
        </header>

    )
};

export default Toolbar;