import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const JournalList = () => {
  const { setJournalList } = useContext(AppContext);

  // initital render will set all the todos to the `tasks` state
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
  }, [setJournalList]);

  return (
    <Container>
      <h6>Filter through your Entries by Mood or by the week Created:</h6>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            View Journal Entrys!
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
                  <Card.Link href="#">Edit Journal</Card.Link>
                  <Card.Link href="#">Delete Journal</Card.Link>
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
