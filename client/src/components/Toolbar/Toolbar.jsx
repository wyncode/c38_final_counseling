import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './mind_passage_logo-white.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./Toolbar.css"

const Toolbar = ({ setOpen, open }) => {


    return (
        <header className="header">
            <nav className="navigation">

                <div className="nav-logo-icon">
                    <Link to="/home"><img src={Logo} alt="Mind Passage Home" /></Link>
                </div>
                <div>
                    <DrawerToggleButton setOpen={setOpen} open={open} />
                </div>

            </nav>
        </header>

    )
};

export default Toolbar;