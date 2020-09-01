import React from 'react';
import TherapistAvatar from './tharapist-avatar.png'
import WebsiteButton from './tharapist-profile-website.png'
import PhoneButton from './tharapist-profile-phone-number.png'
import AddressButton from './tharapist-profile-address.png'
import './TherapistProfile.css'

const TherapistProfile = () => {
    return (
        <main className="therapist-profile">
            <div className="therapist-info">
                <img src={TherapistAvatar} alt="Therapist Avatar" className="therapist-avatar" />
                <h1>[Therapist Name]</h1>
                <h2>Therapist Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui
 officia deserunt mollit anim id est laborum.</p>
            </div>

            <button className="search-therapist">Search Therapist</button>

            <div className="therapists-links">
                <button><img src={WebsiteButton} alt="Visit Therapist's Website" />Visit Website</button>
                <button><img src={PhoneButton} alt="Call Therapist's Office" />Call Office</button>
                <button><img src={AddressButton} alt="Visit the Therapist" />Visit Location</button>
            </div>


        </main>
    )
}

export default TherapistProfile;