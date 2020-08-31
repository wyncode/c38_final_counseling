import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

//journal form component commented out till I can make a connection from the calendar to the jouranl entery
function JournalEntry() {
  return (
    <Container>
      <div>
        <h1>Journal</h1>
        <p>Make an entry to remember what lead you to feel this way today.</p>
      </div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Journal Title</Form.Label>
          <Form.Control type="text" placeholder="Journal Title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Mood</Form.Label>
          <Form.Control as="select">
            <option>Happy</option>
            <option>Sad</option>
            <option>Grumpy</option>
            <option>Motivated</option>
            <option>Excited</option>
            <option>Bored</option>
            <option>Indiferent</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>How do you feel like today?</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save your Entry!
        </Button>
      </Form>
    </Container>
  );
}
export default JournalEntry;
