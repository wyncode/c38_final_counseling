import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import LogoIcon from '../SideDrawer/mind_passage_icon.svg';
import './SideDrawer.css';
import Logout from '../Logout';
import { AppContext } from '../../context/AppContext';

const SideDrawer = ({ setOpen, open }) => {
    const { handleSignOut } = useContext(AppContext);
    const { currentUser } = useContext(AppContext);

    return (

        <div className="side-drawer">

            <Nav className="top-nav-items" defaultActiveKey="/" as="ul">
                {currentUser ? <>
                    <Nav.Item as="li">
                        <Link to="/home" onClick={() => setOpen(!open)}>Home</Link></Nav.Item></> : <><Nav.Item as="li">
                            <Link to="/" onClick={() => setOpen(!open)}>Welcome</Link>
                        </Nav.Item></>}


                {currentUser ? <>
                    <Nav.Item as="li">
                        <Link to="/therapist-search" onClick={() => setOpen(!open)}>Find a Therapist</Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Link to="/mental-hygiene" onClick={() => setOpen(!open)}>Mental Hygiene</Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Link to="/account" onClick={() => setOpen(!open)}>Your Account</Link>
                    </Nav.Item></> : null}

            </Nav>

            <Nav className="bottom-nav-items" defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <img className="nav-logo-icon" src={LogoIcon} alt="Mind Passage About Us" onClick={() => handleSignOut} />
                </Nav.Item>

                {currentUser ? <><Logout setOpen={setOpen} /></> : <><Nav.Item as="li">
                    <Link to="/login" onClick={() => setOpen(!open)}>Login</Link>
                </Nav.Item></>}

            </Nav>
        </div>

    )
}

export default SideDrawer;
