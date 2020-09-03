import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import LogoIcon from './mind-passage-icon.png';
import './SideDrawer.css';
import Logout from '../Logout';



const SideDrawer = ({ setOpen, open }) => {


    return (

        <div className="side-drawer">

            <Nav className="top-nav-items" defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Link to="/home" onClick={() => setOpen(!open)}>Home</Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Link to="/therapist-search" onClick={() => setOpen(!open)}>Find a Therapist</Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Link to="/mental-hygiene" onClick={() => setOpen(!open)}>Mental Hygiene</Link>
                </Nav.Item>

                <Nav.Item as="li">
                    <Link to="/profile" onClick={() => setOpen(!open)}>Your Profile</Link>
                </Nav.Item>
            </Nav>

            <Nav className="bottom-nav-items" defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <img className="nav-logo-icon" src={LogoIcon} alt="Mind Passage About Us" />
                </Nav.Item>


                <Logout setOpen={setOpen} />

            </Nav>
        </div>

    )
}

export default SideDrawer;