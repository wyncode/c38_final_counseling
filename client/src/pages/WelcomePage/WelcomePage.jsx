import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Mind_Passage_Logo.png';
import newUserButton from './NewUser.png';
import loginWelcomeButton from './Login_Button.png';
import welcomFooterImage from './Doorman_with_blob.png';
import signUpButton from './SignUp_Button.png'
import './WelcomePage.css'

const WelcomePage = () => {
  
  return (
    <main>
      
      <div className="logo">
      <img src={Logo} alt="Mind Passage" /> 
      </div>

      <div className="button">
        <div className="newUserButton">
        <Link to="/signup"><img src={newUserButton} alt="New User Button" /></Link>
        </div>
        <div className="loginWelcomeButton">
        <Link to="/login"><img src={loginWelcomeButton} alt="Login Button" /></Link>
        </div>
      </div>

      <div><h1 className="findyourtherapist">Find Your Therapist</h1></div>

      <div className="headerdescription"><h3>Our therapists provide affordable, 
in-office and online psychotherapy 
sessions.</h3></div>
<div><h2 className="how"><ScrollLink
                to="anchor"
                smooth={true}>
              How Does It Work?
              </ScrollLink></h2></div>
              <section className="section2">
                <div className="description">
          <h5 id="anchor">Amidst a world-wide pandemic, job 
displacement due to COVID-19, and
a collective uprising demanding justice for marginalized communities, we are in urgent need of attending to our mental hygiene. We’ve created this app to create accessibility to those struggling to find affordable support. 

In our directory you’ll find professionals in your area offering sliding-scale treatment based on your specific needs while offering additional free resources for those who are not quite ready to meet their therapist. We strive to keep you engaged in your healing process with daily reminders and a profile page that will keep track of your moods and journal entries.
<div className="signUpButton">
        <Link to="/signup"><img src={signUpButton} alt="Sign Up Button" /></Link>
        </div></h5></div>
 <div className="welcomFooterImage"><img src={welcomFooterImage} alt="Welcom Footer Image" /></div>
 {/* <div className="signUpButton">
        <Link to="/signup"><img src={signUpButton} alt="Sign Up Button" /></Link>
        </div> */}
 </section>
      
      
    </main>

  )
}

export default WelcomePage;