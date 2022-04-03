import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

function LogoutButton(){
    return <Link to="/logout">Logout</Link>
}

function LoginButton(){
    return <Link to="/login">Login</Link>
}

const Navbar = () => {
    const [isLoggedIn, setLogin] = useState(!!localStorage.getItem('accessToken'));
    console.log('Navbar()')
    const user = useContext(UserContext);

    useEffect(() => {
        console.log(user);
        if(user.user){
            setLogin(true)
            console.log("loggedIn");
        } else {
            setLogin(false)
            console.log("loggedOut");
        }
    },[user.user, user])

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
                    <Link to="/register">Register</Link>
                </li>
                <li key={isLoggedIn}>
                    {isLoggedIn ? LogoutButton() : LoginButton()}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;