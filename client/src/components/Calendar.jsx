import React, { useState } from 'react';
import Calendar from 'react-calendar';
import swal from 'sweetalert';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
      <div className="filterJournal">
        <h4>Filter your Journal Entry's by :</h4>
        <DropdownButton id="dropdown-item-button" title="Mood">
          <Dropdown.Item as="button">Happy</Dropdown.Item>
          <Dropdown.Item as="button">Sad</Dropdown.Item>
          <Dropdown.Item as="button">Grumpy</Dropdown.Item>
          <Dropdown.Item as="button">Excited</Dropdown.Item>
          <Dropdown.Item as="button">Bored</Dropdown.Item>
          <Dropdown.Item as="button">Indiferent</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-item-button" title="Week">
          <Dropdown.ItemText>Week</Dropdown.ItemText>
          <Dropdown.Item as="button">Current week</Dropdown.Item>
          <Dropdown.Item as="button">Last week</Dropdown.Item>
          <Dropdown.Item as="button">Two weeks ago</Dropdown.Item>
        </DropdownButton>
      </div>
      <Calendar onChange={setValue} value={value} onClickDay={handleDayClick} />
    </div>
  );
};

export default ReactCalendar;
