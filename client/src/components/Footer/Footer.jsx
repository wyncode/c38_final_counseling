import React from 'react';
import cory from './NEW_Cory_footer.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container3">

            <div className="cory">
                <img src={cory} alt="Dedicated to Cory" />
            </div>

        </footer>
    )
}

export default Footer;