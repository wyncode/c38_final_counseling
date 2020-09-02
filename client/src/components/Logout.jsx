import React, { useContext } from 'react';
import axios from 'axios';
import { Nav } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Logout = ({ setOpen }) => {
    const history = useHistory();
    const { setCurrentUser } = useContext(AppContext);

    const handleSignOut = () => {
        axios
            .post('/api/users/logout', { withCredentials: true })
            .then(() => {
                setCurrentUser(null);
                sessionStorage.removeItem('user');
                setOpen(false)
                history.push('/login');
            })
            .catch((error) => console.log(error));
    };

    return (
        <Nav.Item as="li" onClick={handleSignOut}>
            <p >Logout</p>
        </Nav.Item>

    );
};

export default Logout;