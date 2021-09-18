import React from "react";

const Login = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
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
        const res = await fetch("http://localhost:2345/users/login", options);
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error(e);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <input type="submit" />
    </form>
  );
};

export default Login;