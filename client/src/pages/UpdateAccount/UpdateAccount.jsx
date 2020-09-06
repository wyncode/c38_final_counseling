import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import SaveChanges from './SaveChanges.svg';
import Cancel from './Cancel.svg';
import './UpdateAccount.css';

const UpdateAccount = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/users/me', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((data) => console.log('Updated!!!', data))
      .catch((e) => console.log(e));
  };

  return (
    <Container className="signupMain" id="signupMain">
      <h1 className="mb-4">Edit Your Information</h1>
      <Form style={{ width: 300 }} onSubmit={handleSubmit} id="signup-form">
        <Form.Group>
          <Form.Label htmlFor="fullName">Full Name</Form.Label>
          <Form.Control
            id="fullName"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit" onSubmit={handleSubmit} id="save-changes">
            Save Changes
          </Button>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button
            type="cancel"
            id="cancel"
            onClick={() => history.push('/home')}
          >
            Cancel
          </Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/login">
        Delete Account
      </Link>
    </Container>
  );
};

export default UpdateAccount;
