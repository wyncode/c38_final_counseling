import React, { useContext } from 'react';
// import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './SideDrawer/SideDrawer.css';

const Logout = ({ setOpen }) => {
    const history = useHistory();
    const { setCurrentUser } = useContext(AppContext);

    const handleSignOut = async () => {

        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            if (response) {
                console.log(response);
                setCurrentUser(null)
                sessionStorage.removeItem('user')
                setOpen(false)
                history.push('/login')
            }
        } catch (error) {
            console.log(error)
        }

        // axios
        //     .post('/api/users/logout', { withCredentials: true })
        //     .then((res) => {
        //         console.log(res)
        //         setCurrentUser(null);
        //         sessionStorage.removeItem('user');
        //         setOpen(false)
        //         history.push('/login');
        //     })
        //     .catch((error) => console.log(error));
    };

    return (
        <Nav.Item as="li" onClick={handleSignOut}>
            <p className="logout">Logout</p>
        </Nav.Item>

    );
};

export default Logout;