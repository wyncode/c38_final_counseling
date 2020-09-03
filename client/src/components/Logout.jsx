import React, { useContext } from 'react';
// import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './SideDrawer/SideDrawer.css';

const Logout = ({ setOpen }) => {
  const history = useHistory();
  const { setCurrentUser, currentUser } = useContext(AppContext);

  const handleSignOut = async () => {
    fetch('/api/users/logout', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `jwt ${currentUser.tokens[0].token}` // TODO this is a hack, shouldn't be necessary
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setOpen(false);
        setCurrentUser(null);
        history.push('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Nav.Item as="li" onClick={handleSignOut}>
      <p className="logout">Logout</p>
    </Nav.Item>
  );
};

export default Logout;
