import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string'


function Register(props) {
    const { search } = useLocation();
    const { message } = queryString.parse(search);

    return (
        <>
            <form action="/auth/register" method="post">
                <fieldset>
                    {message && <legend>{message}</legend>}
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" name="username" className="form-control" id="username" aria-describedby="username" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label for="full-name">Full Name</label>
                        <input type="text" name="fullName" className="form-control" id="username" aria-describedby="full-name" placeholder="Firstname Lastname" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Registration</button>
                </fieldset>
            </form>
            <Link to="/login">Sing In</Link>
        </>
    )
}


export default Register;


