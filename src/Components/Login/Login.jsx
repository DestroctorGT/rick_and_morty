import "./Login.css";
import React, { useState } from "react";
import validation from "./validation";

export default function Login({ SignIn }) {
  const [inputs, setState] = useState({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });

  function handleInput(e) {
    setState({
      ...inputs,
      [e.target.name]: [e.target.value],
      error: validation(e.target),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    SignIn(inputs);

    setState({
      email: "",
      password: "",
      error: {},
    });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Welcome Back</h1>
        <input
          className="login-form__input"
          name="email"
          value={inputs.email}
          placeholder="Email"
          onChange={handleInput}></input>

        <input
          className="login-form__input"
          type="password"
          name="password"
          value={inputs.password}
          placeholder="Password"
          onChange={handleInput}></input>

        <button type="submit" className="login-form__button">
          Sign in
        </button>
      </form>
    </div>
  );
}
