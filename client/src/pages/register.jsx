import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import queryString from 'query-string'


function Register(props) {
    const { search } = useLocation();
    const { message } = queryString.parse(search);

    return (
        <>
            <Form action="/auth/register" method="post">

                {message && <legend>{message}</legend>}

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Firstname Lastname" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Registration</Button>

            </Form>

            <Link to="/login">Sing In</Link>
        </>
    )
}


export default Register;


