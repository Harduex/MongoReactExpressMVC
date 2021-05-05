import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            <form action="/auth/login" method="post">
                <fieldset>
                    {message && <legend>{message}</legend>}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" name="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </fieldset>
            </form>
            <Link to="/register">Sing Up</Link>
        </>
    )
}


export default Login;
