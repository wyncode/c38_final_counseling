import React from 'react';
import { Link } from 'react-router-dom';
import find from './Find_My_Therapist_Button.svg';
import track from './Track_Thinking_Button.svg';
import mental from './Mental_Hygiene_Button.svg';
import profile from './My_Profile_Button.svg';
import journalButton from './Journal_Button.svg';
import cory from './Cory_Footer.svg';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="quote">
        <h2>
          {/* adding a math.random functionality to these quotes tomorrow */}
          <em>"Quote of the Day"</em>
        </h2>
      </div>
      <div className="grid">
        <div className="container">
          <div className="profile">
            <Link to="/profile">
              <img src={profile} alt="My Profile" />
            </Link>
          </div>
          <div className="journalButton">
            <Link to="/calendar">
              <img src={journalButton} alt="My Journal" />
            </Link>
          </div>
        </div>
        <div className="container2">
          <div className="find">
            <Link to="/therapist-search">
              <img src={find} alt="Find My Therapist" />
            </Link>
          </div>
          <div className="track">
            <Link to="/unhealthy-thinking">
              <img src={track} alt="Unhealthy Thinking" />
            </Link>
          </div>
          <div className="mental">
            <Link to="/mental-hygiene">
              <img src={mental} alt="Mental Hygiene" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="cory">
          <img src={cory} alt="Dedicated to Cory" />
        </div>
      </div>
    </main>
  );
}

export default Home;
