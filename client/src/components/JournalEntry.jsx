import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import axios from 'axios';

function JournalEntry() {
  const [journalData, setJournalData] = useState(null);
  const history = useHistory();
  const { setLoading, currentUser } = useContext(AppContext);
  console.log(journalData);

  const handleChange = (e) => {
    setJournalData({ ...journalData, [e.target.name]: e.target.value });
  };

  const handleJournalSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    axios
      .post('/api/journal', journalData, {
        headers: {
          Authorization: `jwt ${JSON.parse(currentUser).tokens[0].token}`
        }
      })
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
    <Container id="journalimage">
      <div id="journal1">
        <div>
          <h1>Journal</h1>
          <p>Make an entry to remember what lead you to feel this way today.</p>
        </div>
        <Form onSubmit={handleJournalSubmission}>
          <Form.Group controlId="JournalSubmitionForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Journal Title"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlMood1">
            <Form.Label>Mood</Form.Label>
            <Form.Control as="select" name="mood" onChange={handleChange}>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="grumpy">Grumpy</option>
              <option value="motivated">Motivated</option>
              <option value="excited">Excited</option>
              <option value="bored">Bored</option>
              <option value="indifferent">Indifferent</option>
            </Form.Control>

            <Form.Control
              placeholder="Journal Body:"
              as="textarea"
              rows="3"
              name="body"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save your Entry!
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default JournalEntry;
