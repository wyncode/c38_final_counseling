import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './TherapistSearch.css';
import { Link } from 'react-router-dom';

const TherapistSearch = () => {
  const [therapists, setTherapists] = useState([]);
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [modality, setModality] = useState('');
  useEffect(() => {
    fetch(
      `/api/therapists?city=${city}&gender=${gender}&race=${race}&specialty=${specialty}&modality=${modality}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then((data) => data.json())
      .then((res) => {
        setTherapists(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [city, gender, modality, race, specialty]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(
      `/api/therapists?city=${city}&gender=${gender}&race=${race}&specialty=${specialty}&modality=${modality}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setTherapists(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main className="therapist-search-main">
      <h2>Find a Therapist</h2>
      <p id="therapist-search">
        Search for counselors near your area. For a more detailed search, click
        the arrow to display all filters.
      </p>
      <form className="form-contents" onSubmit={handleSearch}>
        <div className="search-filters-all">
          <div className="search-filter-fields">
            <label>Location</label>
            <select
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" />
              <option value="Alexandria, VA">Alexandria, VA</option>
              <option value="Arlington, VA">Arlington, VA</option>
              <option value="Atlanta, GA">Atlanta, GA</option>
              <option value="Austin, TX">Austin, TX</option>
              <option value="Boston, MA">Boston, MA</option>
              <option value="Buffalo, NY">Buffalo, NY</option>
              <option value="Charlotte, NC">Charlotte, NC</option>
              <option value="Chicago, IL">Chicago, IL</option>
              <option value="Cincinnati, OH">Cincinnati, OH</option>
              <option value="Colombus, OH">Colombus, OH</option>
              <option value="Dallas, TX">Dallas, TX</option>
              <option value="Detroit, MI">Detroit, MI</option>
              <option value="Denver, CO">Denver, CO</option>
              <option value="El Paso, TX">El Paso, TX</option>
              <option value="Ft. Lauderdale, FL">Ft. Lauderdale, FL</option>
              <option value="Ft. Worth, TX">Ft. Worth, TX</option>
              <option value="Houston, TX">Houston, TX</option>
              <option value="Indianapolis, IN">Indianapolis, IN</option>
              <option value="Jacksonville, FL">Jacksonville, FL</option>
              <option value="Los Angeles, CA">Los Angeles, CA</option>
              <option value="Miami, FL">Miami, FL</option>
              <option value="New York, NY">New York, NY</option>
              <option value="Nashville, TN">Nashville, TN</option>
              <option value="Orlando, FL">Orlando, FL</option>
              <option value="Philadelphia, PA">Philadelphia, PA</option>
              <option value="Phoenix, AZ">Phoenix, AZ</option>
              <option value="Pittsburgh, PA">Pittsburgh, PA</option>
              <option value="Portland, OR">Portland, OR</option>
              <option value="Richmond, VA">Richmond, VA</option>
              <option value="San Antonio, TX">San Antonio, TX</option>
              <option value="San Diego, CA">San Diego, CA</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
              <option value="San Jose, CA">San Jose, CA</option>
              <option value="Seattle, WA">Seattle, WA</option>
              <option value="Washington, DC">Washington, DC</option>
            </select>
          </div>
          <div className="search-filter-fields">
            <label>Race</label>
            <select
              name="race"
              id="race"
              onChange={(e) => setRace(e.target.value)}
            >
              <option value="" />
              <option value="asian">Asian</option>
              <option value="african-american">African-American</option>
              <option value="hispanic">Hispanic</option>
              <option value="middle-Eastern">Middle-Eastern</option>
              <option value="multi-racial">Multi-Racial</option>
              <option value="native-american">
                Native American or Alaskan Native
              </option>
              <option value="native-hawaiian">
                Native Hawaiian or Pacific Islander
              </option>
              <option value="white">White</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="search-filter-fields">
            <label>Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">NonBinary</option>
            </select>
          </div>

          <div className="search-filter-fields">
            <label>Specialty</label>
            <select
              name="specialty"
              id="specialty"
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="" />
              <option value="Aggression and Violence">
                Aggression and Violence
              </option>
              <option value="Anger Management">Anger Management</option>
              <option value="Agoraphobia">Agoraphobia</option>
              <option value="Antisocial Personality">
                Antisocial Personality
              </option>
              <option value="Behavioral Issues">Behavioral Issues</option>
              <option value="Bipolar Disorder">Bipolar Disorder</option>
              <option value="Border Personality Disorder">
                Border Personality Disorder
              </option>
              <option value="Coping Mechanisms">Coping Mechanisms</option>
              <option value="Depression">Depression</option>
              <option value="Dissociative Disorders">
                Dissociative Disorders
              </option>
              <option value="Domestic Abuse">Domestic Abuse</option>
              <option value="Eating Disorders">Eating Disorders</option>
              <option value="Emotional Disturbance">
                Emotional Disturbance
              </option>
              <option value="Loss or Grief">Loss or Grief</option>
              <option value="Marriage Counseling">Marriage Counseling</option>
              <option value="Mood Disorders">Mood Disorders</option>
              <option value="Narcissistic Personality">
                Narcissistic Personality
              </option>
              <option value="Parenting">Parenting</option>
              <option value="Personality Disorders">
                Personality Disorders
              </option>
              <option value="Psychosis">Psychosis</option>
              <option value="Relationship Issues">Relationship Issues</option>
              <option value="Self Esteem">Self Esteem</option>
              <option value="Self Harming">Self Harming</option>
              <option value="Sex Therapy">Sex Therapy</option>
              <option value="Sexual Abuse">Sexual Abuse</option>
              <option value="Suicidal Ideation">Suicidal Ideation</option>
              <option value="Teen Violence">Teen Violence</option>
              <option value="Trauma and PTSD">Trauma and PTSD</option>
              <option value="Trauma and PTSD">Trauma and PTSD</option>
            </select>
          </div>

          <div className="search-filter-fields">
            <label>Modality</label>
            <select
              name="modality"
              id="modality"
              onChange={(e) => setModality(e.target.value)}
            >
              <option value="" />
              <option value="individual">Individual</option>
              <option value="children">Children</option>
              <option value="couple">Couple</option>
              <option value="family">Family</option>
              <option value="group">Group</option>
            </select>
          </div>
        </div>

        <div className="search-submit-button">
          <input
            className="search-submit-button"
            type="submit"
            value="Submit"
          />
        </div>
      </form>

      <div className="therapist-search-cards">
        {therapists.map((therapist) => {
          return (
            <div
              className="therapist-card"
              id="thereapist-card"
              key={therapist._id}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{therapist.name}</Card.Title>
                  <Card.Text>{therapist.jobTitle}</Card.Text>
                  <Card.Text>{`${therapist.streetAddress} ${therapist.city} ${therapist.zipCode}`}</Card.Text>
                  <Card.Text>{`Call: ${therapist.phoneNumber}`}</Card.Text>
                  <Link id="view-profile" to={`/therapist/${therapist._id}`}>
                    View Profile
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default TherapistSearch;
