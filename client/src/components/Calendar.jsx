import React, { useState } from 'react';
import Calendar from 'react-calendar';
import swal from 'sweetalert';
import JournalList from './JournalList';
import moment from 'moment';


const ReactCalendar = ({ history }) => {
  const [value, setValue] = useState(new Date());

  const handleDayClick = (day) => {
    swal(`${moment(day).format('MMM Do, YYYY')}`, {
      buttons: {
        new: ' Make a journal entry',
        view: {
          text: 'View Journal Entry',
          value: 'Journal Entry'
        }
      }
    })
      .then((value) => {
        switch (value) {
          case 'new':
            history.push('/journal-page');
            break; // needs to be worked on to render a large pop up of the journal entry
          case 'delete':
            // handleDelete(entryId);
            console.log('delete journal entry');
            break;
        }
      })
      .then(() => {});
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
