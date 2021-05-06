import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import { useQuery } from 'react-query';
import axios from "axios";

async function fetchMessage() {
    const { data } = await axios.get(`/auth/login`);
    return data;
}

function Login(props) {

    const { data, refetch } = useQuery('login-message', fetchMessage);
    const [state, setState] = useState({ username: '', password: '' });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`/auth/login`, state)
            .then(function (response) {
                console.log(response);
                props.history.push('/');
            })
            .catch(function (error) {
                console.log(error);
                refetch();
            });
    }


    return (
        <>
            <Form action="/auth/login" method="post" onSubmit={handleSubmit}>

                {data?.message && <legend>{data?.message}</legend>}

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" value={state.username} onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">Log in</Button>

            </Form>
            <Link to="/register">Sing Up</Link>
        </>
    )
}


export default Login;
