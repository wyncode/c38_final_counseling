import React, { useState } from 'react';
import Calendar from 'react-calendar';
import swal from 'sweetalert';
import JournalList from './JournalList';
import './JournalStylesheets/index.css'

// unable to get calendar to rinder pushing to get some help while i debug.

const ReactCalendar = ({ history }) => {
  const [value, setValue] = useState(new Date());

  const handleDayClick = (day) => {
    swal(`${day}`, {
      buttons: {
        new: ' Make a journal entry',
        view: {
          text: 'View Journal Entry',
          value: 'Journal Entry'
        }
      }
    }).then((value) => {
      switch (value) {
        case 'new':
          history.push('/journal-page');
          break;
        case 'delete':
          // handleDelete(entryId);
          console.log('delete journal entry');
          break;
      }
    });
  };

  return (
    <div className="calendar-main">
      <h2>Journal</h2>
      <p>Select a past day to display previous entries. To make a journal entry, select the current day. </p>
      <Calendar onChange={setValue} value={value} onClickDay={handleDayClick} />
      <JournalList />
    </div>
  );
};

export default ReactCalendar;
