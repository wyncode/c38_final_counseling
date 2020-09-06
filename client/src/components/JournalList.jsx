import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import JournalCard from './JournalCards';
import './JournalStylesheets/index.css';

const JournalList = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    axios.get('/api/journals', { withCredentials: true }).then((res) => {
      const { journals } = res.data;
      setJournalEntries(journals);
    });
  }, []);

  return (
    <Container id="container">
      <Accordion>
        <Card style={{ 'background-color': '#988282' }}>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            View Journal Entries
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {journalEntries.map((entry) => (
                <JournalCard key={entry._id} {...entry} />
              ))}
              <JournalCard />
              <Card style={{ width: '18rem' }}></Card>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};
export default JournalList;
