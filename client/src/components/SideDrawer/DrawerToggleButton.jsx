import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = ({ setOpen, open }) => {

    return (
        <button className="toggle-button" onClick={() => setOpen(!open)}>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </button>
    )
}

export default drawerToggleButton;