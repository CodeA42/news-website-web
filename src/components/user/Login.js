import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const res = await fetch("http://localhost:3333/login", options);
        if(res.status === 200) {
          const data = await res.json();
          history.push(`/${data.userId}`);
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
