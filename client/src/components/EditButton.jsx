import React, { useContext } from 'react';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const EditButton = () => {
  // needs work and test still
  const { setLoading } = useContext(AppContext);

  const handleJournalEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch('/api/journal/:id', {
      method: 'patch',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {

        // form.reset();
        swal('');
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Button onClick={handleJournalEdit} variant="outline-info">
      Edit Post
    </Button>
  );
};

export default EditButton;
