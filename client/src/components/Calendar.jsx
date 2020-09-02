import React, { useState } from 'react';
import Calendar from 'react-calendar';
import swal from 'sweetalert';
import JournalList from './JournalList';

// unable to get calendar to rinder pushing to get some help while i debug.

const ReactCalendar = ({ history }) => {
  const [value, setValue] = useState(new Date());

  const handleDayClick = (day) => {
    swal(`${day}`, {
      buttons: {
        new: 'Do you want to make a journal entry',
        delete: {
          text: 'Delete entry',
          value: 'delete'
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
    <div>
      <Calendar onChange={setValue} value={value} onClickDay={handleDayClick} />
      <JournalList />
    </div>
  );
};

export default ReactCalendar;
