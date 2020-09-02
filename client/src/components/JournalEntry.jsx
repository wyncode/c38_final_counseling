import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function JournalEntry() {
  const history = useHistory();
  const { setLoading } = useContext(AppContext);
  console.log(history);
  const handleJournalSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    fetch('/api/journal', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.fromEntries(formData))
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        form.reset();
        swal(' Your Journal has been saved!');
        history.push('/calendar');
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div>
        <h1>Journal</h1>
        <p>Make an entry to remember what lead you to feel this way today.</p>
      </div>
      <Form onSubmit={handleJournalSubmission}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Journal Title</Form.Label>
          <Form.Control type="text" placeholder="Journal Title" name="title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Mood</Form.Label>
          <Form.Control as="select" name="mood">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="grumpy">Grumpy</option>
            <option value="motivated">Motivated</option>
            <option value="excited">Excited</option>
            <option value="bored">Bored</option>
            <option value="indifferent">Indifferent</option>
          </Form.Control>
          <Form.Control as="textarea" rows="3" name="body" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save your Entry!
        </Button>
      </Form>
    </Container>
  );
}
export default JournalEntry;
