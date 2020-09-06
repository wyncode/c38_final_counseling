import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import './Login.css';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      swal('Welcome Back!');
      history.push('/home');
    } catch (error) {
      swal('Oops!', 'Something went wrong');
    }
  };

  return (
    <Container className="loginMain">
      <h1 className="mb-4">Welcome Back</h1>
      <Form style={{ width: 300 }} onSubmit={handleLogin}>
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
          <Button id="login" type="submit">Login</Button>
        </Form.Group>
      </Form>
      <Link className="mt-4" to="/signup">
        Need an Account? Sign up.
      </Link>
      <p>
        <Link className="mt-4" to="/password-reset">
          Forgot Password?
        </Link>
      </p>
    </Container>
  );
};

export default Login;
