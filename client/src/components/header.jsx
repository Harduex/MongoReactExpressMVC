import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">{props?.title || 'Home'}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/login" onClick={async () => await fetch(`/auth/logout`)}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header;
