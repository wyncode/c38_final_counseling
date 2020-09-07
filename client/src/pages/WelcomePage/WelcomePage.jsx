import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Mind_Passage_Logo.svg';
import newUserButton from './NewUser.svg';
import loginWelcomeButton from './Login_Button.svg';
import signUpButton from './SignUp_Button.svg';
import how from './How_Arrow.svg';
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <main className="backgroundimage">
      <section className="section1">
        <div className="logo">
          <img id="logo" src={Logo} alt="Mind Passage" />
        </div>
        <div className="button">
          <div className="newUserButton">
            <Link to="/signup">
              <img src={newUserButton} alt="New User Button" />
            </Link>
          </div>
          <div className="loginWelcomeButton">
            <Link to="/login">
              <img src={loginWelcomeButton} alt="Login Button" />
            </Link>
          </div>
        </div>
        <div>
          <p className="findyourtherapist">Find Your Therapist</p>
        </div>
        <div className="headerdescription">
          <h3>
            Our therapists provide affordable, in-office and online
            psychotherapy sessions.
          </h3>
        </div>
        <div>
          <h2 className="how">
            {/* added scroll link so user is more likely to view bottom portion of page */}
            <ScrollLink to="anchor" smooth={true}>
              <img id="how-img" src={how} alt="HOW IT WORKS" />
            </ScrollLink>
          </h2>
        </div>
      </section>
      <section className="section2">
        <div id="anchor">
          <p className="welcome">We Welcome All People</p>
        </div>
        <div className="description">
          <h5>
            Amidst a world-wide pandemic, job displacement due to COVID-19, and
            a collective uprising demanding justice for marginalized
            communities, we are in urgent need of attending to our mental
            hygiene. We've created this app to create accessibility to those
            struggling to find affordable support.<br></br><br></br>

              In our directory you'll find professionals in your area offering
              sliding-scale treatment based on your specific needs while
              offering additional free resources for those who are not quite
              ready to meet their therapist. We strive to keep you engaged in
              your healing process with daily reminders and a profile page that
              will keep track of your moods and journal entries.
            </h5>
          <div className="signUpButton">
            <Link to="/signup">
              <img src={signUpButton} alt="Sign Up Button" />
            </Link>
          </div>

        </div>
      </section>
    </main >
  );
};
export default WelcomePage;
