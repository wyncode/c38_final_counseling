import React, { useEffect, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import SearchbyMood from './SearchbyMood';
import JournalCard from './JournalCards';
import './JournalStylesheets/index.css';
import './JournalStylesheets/index.css';

const JournalList = () => {
  const { setJournalList } = useContext(AppContext);
  const { setLoading, currentUser } = useContext(AppContext);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/journal/${id}`, {
        headers: {
          Authorization: `jwt ${JSON.parse(currentUser).tokens}`
        }
      })
      .then((response) => {
        setJournalList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container id="container">
      <Accordion>
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            View Journal Entries
            <SearchbyMood />
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <JournalCard />
              <JournalCard />
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
