import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import Logo from './mind_passage_logo-white.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import BackButton from './back-button.png'
import "./Toolbar.css"

const Toolbar = ({ setOpen, open }) => {
    const history = useHistory();

    return (
        <header className="header">
            <nav className="navigation">

                <div className=""><img className="back-button" src={BackButton} alt="Go Back" onClick={() => history.goBack()} /></div>

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