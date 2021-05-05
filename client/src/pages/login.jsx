import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Login(props) {

    const [message, setMessage] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/auth/login`);
            const json = await response.json();
            setMessage(json.message);
        }
        fetchData();
    }, [])

    return (
        <>
            <Form action="/auth/login" method="post">

                {message && <legend>{message}</legend>}

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Log in</Button>
                
            </Form>
            <Link to="/register">Sing Up</Link>
        </>
    )
}


export default Login;
