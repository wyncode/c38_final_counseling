import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Card from 'react-bootstrap/Card';

const JournalCards = () => {
  return (
    <Card.Body id="card-item">
      <Card.Title>Today was a good day</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Happy</Card.Subtitle>
      <Card.Text>
        I had an amazing interview with a great company today.
      </Card.Text>
      <div className="delete-edit-buttons">
        <DeleteButton />
        <EditButton />
      </div>
    </Card.Body>
  );
};

export default JournalCards;
