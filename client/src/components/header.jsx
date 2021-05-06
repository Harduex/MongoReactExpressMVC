import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';


function Header(props) {
    return (
        <header>
            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Nav.Item>
                    <Nav.Link href="/">App</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    <Nav.Link href="/login" onClick={async () => await axios(`/auth/logout`)}>Logout</Nav.Link>
                </Nav.Item>
            </Nav>
        </header >
    )
}


export default Header;
