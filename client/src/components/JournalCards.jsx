import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Card from 'react-bootstrap/Card';

const JournalCards = ({ mood, title, body }) => {
  return (
    <Card.Body id="card-item">
      <Card.Title>{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{mood}</Card.Subtitle>
      <Card.Text>{body}</Card.Text>
      <div className="delete-edit-buttons">
        <DeleteButton />
        <EditButton />
      </div>
    </Card.Body>
  );
};

export default JournalCards;
