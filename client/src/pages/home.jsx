import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {

    if (props?.data?.user) {
        return <h1>Hello, {props?.data?.user}!</h1>
    }
    return <h1>You must <Link to="/login">log in</Link> first!</h1>
}


export default Home;
