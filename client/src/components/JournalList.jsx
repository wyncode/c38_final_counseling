import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
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

  return <Container></Container>;
};
export default JournalList;
