import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './TherapistProfile.css';
import { AppContext } from '../../context/AppContext';

const TherapistProfile = () => {
  const { currentUser } = useContext(AppContext);
  const { id } = useParams();
  const [therapist, setTherapist] = useState({});

  useEffect(() => {
    fetch(`/api/therapist/${id}`)
      .then((res) => res.json())
      .then((data) => setTherapist(data))
      .catch((error) => console.log('Error???: ', error));
  }, []);
  console.log(therapist);
  return (
    <main className="therapist-profile">
      <div className="therapist-info">
        <img
          src={therapist.avatar}
          alt="Therapist Avatar"
          className="therapist-avatar"
        />
        <h1>{therapist.name}</h1>
        <h2>{therapist.jobTitle}</h2>
        <div className="therapist-copy">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="therapist-secondary-info">
        <div className="skills-expertise">
          <h2>Skills & Expertise</h2>
          <div>
            {therapist.specialty?.map((specialty) => (
              <p key={specialty}>{specialty}</p>
            ))}
          </div>
        </div>

        <div className="finances">
          <h2>Finances</h2>
          <p className="finances-item">Individual Counseling $30-60</p>
          <p className="finances-item">Couple & Family Counseling $30-80</p>
        </div>
      </div>
    </main>
  );
};

export default TherapistProfile;
