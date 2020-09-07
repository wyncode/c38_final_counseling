import React, { useContext } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './SideDrawer/SideDrawer.css';

const Logout = ({ setOpen }) => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);

  const handleSignOut = async () => {
    axios
      .post('/api/users/logout', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        setCurrentUser(null);
        sessionStorage.removeItem('user');
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
