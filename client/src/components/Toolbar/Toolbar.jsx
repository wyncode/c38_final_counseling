import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Logo from './mind_passage_logo-white.png'
// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./Toolbar.css"

const Toolbar = () => {
    return (
        <header className="header">
            <nav className="navigation">
                {/* <div>
                    <DrawerToggleButton />
                </div> */}
                <div className="nav-logo-icon">
                    <Link to="/home"><img src={Logo} alt="Mind Passage Home" /></Link>
                </div>

                <div className="spacer" />

                <div className="nav-items">
                    <Nav defaultActiveKey="/" as="ul">
                        <Nav.Item as="li">
                            <Link to="/home">Home</Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link to="/therapist-search">Find a Therapist</Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link to="/mental-hygiene">Mental Hygiene</Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link to="/profile">Your Profile</Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link to="/about">About Us</Link>
                        </Nav.Item>

                    </Nav>
                </div>
            </nav>
        </header>

    )
};

export default Toolbar;