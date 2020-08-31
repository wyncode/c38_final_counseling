import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
function JournalEntry() {
  return (
    <Container>
      <div>
        <h1>Journal</h1>
        <p>Make an entry to remember what lead you to feel this way today.</p>
      </div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Journal Title</Form.Label>{' '}
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
