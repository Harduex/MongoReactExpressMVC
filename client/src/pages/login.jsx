import React from 'react';


function Login(props) {
    return (
        <form action="/auth/login" method="post">
            <fieldset>
                <legend>{props.message}</legend>
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
    )
}


export default Login;
