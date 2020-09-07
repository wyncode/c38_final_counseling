import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import './PasswordReset.css';

const PasswordReset = () => {
  const [email, setEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    axios
      .get(`/api/password?email=${email}`)
      .then((res) => {
        swal('Check your email to reset your password!');
        form.reset('/login');
      })
      .catch((error) => swal('Error! try again'));
  };

  return (
    <Container className="mainPR">
      <h1>Reset Password</h1>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button id="resetpw-form-button" type="submit">Send Email</Button>
        </Form.Group>



      </Form>
    </Container>
  );
};

export default PasswordReset;
