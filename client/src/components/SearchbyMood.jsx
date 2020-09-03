import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const SearchbyMood = () => {
  const { setSearch } = useContext(AppContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search by Mood"
      onChange={handleSearch}
    />
  );
};
export default SearchbyMood;
