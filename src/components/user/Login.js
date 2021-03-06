import React, { useContext, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const userContext = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const res = await fetch("http://localhost:3333/login", options);
        if(res.status === 200) {
          const data = await res.json();
          history.push(`/${data.user.id}`);
          localStorage.setItem('accessToken', data.accessToken);
          userContext.setUser(data.user);
        }
    } catch (e) {
        console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" defaultValue={location.state?.username} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <input type="submit" />
    </form>
  );
};

export default Login;
