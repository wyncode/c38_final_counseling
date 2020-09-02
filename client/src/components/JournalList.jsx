import React, { useEffect, useContext } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import SearchbyMood from './SearchbyMood';
const JournalList = () => {
  const { setJournalList } = useContext(AppContext);
  const { setLoading } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/journal/:id', {
        withCredentials: true
      })
      .then((response) => {
        setJournalList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            View Journal Entrys!
            <SearchbyMood />
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Today was a good day</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Happy
                  </Card.Subtitle>
                  <Card.Text>
                    I had an amazing interview with a great company today.
                  </Card.Text>
                  <DeleteButton />
                  <EditButton />
                </Card.Body>
              </Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};
export default JournalList;
