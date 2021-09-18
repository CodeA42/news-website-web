import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/article/create">Create Article</Link>
                </li>
                <li>
                    <Link to="/profile/register">Register</Link>
                </li>
                <li>
                    <Link to="/profile/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;