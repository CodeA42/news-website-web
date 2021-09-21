import React from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        date: new Date(),
    };
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json",
      },
    };
    try {
        const res = await fetch("http://localhost:2345/users/register", options);
        if(res.status === 200) {
          const data = await res.json();
          history.push('/login', {username: data.username});
        }
    } catch (e) {
        console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="repeat-password">Repeat password</label>
        <input type="password" id="repeat-password" name="repeat-password" />

      <input type="submit" />
    </form>
  );
};

export default Register;
