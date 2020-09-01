import React from 'react';
import './WelcomePage.css'
import Logo from './Mind_Passage_Logo.png'



const WelcomePage = () => {
  //this page is not displaying. Will come back to update it. 
  return (
    <main>
      <div className="welcome-page">
      <div className="logo">
      <img src={Logo} alt="Mind Passage" />
      </div>
      </div>
    </main>

  )
}

export default WelcomePage;