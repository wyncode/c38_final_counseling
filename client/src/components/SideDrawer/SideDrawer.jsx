import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import LogoIcon from './mind-passage-icon.png';
import './SideDrawer.css';



const SideDrawer = () => {
    return (

        <div className="side-drawer">

            <Nav className="top-nav-items" defaultActiveKey="/" as="ul">
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
            </Nav>

            <Nav className="bottom-nav-items" defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Link to="/about"><img className="nav-logo-icon" src={LogoIcon} alt="Mind Passage About Us" /></Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Link to="/about">About Us</Link>
                </Nav.Item>
            </Nav>
        </div>

    )
}

export default SideDrawer;