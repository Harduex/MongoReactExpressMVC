import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import queryString from 'query-string'
import axios from "axios";


function Register(props) {
    // const { search } = useLocation();
    // const { message } = queryString.parse(search);
    const [message, setMessage] = useState('');

    const [state, setState] = useState({ username: '', password: '', fullName: '' });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`/auth/register`, state)
            .then(function (res) {
                if (res.data.message) {
                    setMessage(res.data.message);
                } else {
                    props.history.push('/login');
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <>
            <Form action="/auth/register" method="post" onSubmit={handleSubmit}>

                {message && <legend>{message}</legend>}

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Firstname Lastname" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">Registration</Button>

            </Form>

            <Link to="/login">Sing In</Link>
        </>
    )
}


export default Register;


