import React from 'react';
import Card from 'react-bootstrap/Card';
import Therapist from '../pages/TherapistSearch';

const TherapistSearch = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{Therapist.name}</Card.Title>
        <Card.Text>{Therapist.jobTitle}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TherapistSearch;
