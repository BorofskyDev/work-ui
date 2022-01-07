import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

import "../../App.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <div className="loginApp">
      <div className="Login">
        <div className="heading">
          <h1 className="chrome">ASIMOV ADVENTURES</h1>
        </div>
        <h2 className="header">Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="form-grouping" onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              className="input"
              type="email"
              ref={emailRef}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              className="input"
              variant="empty"
              type="password"
              ref={passwordRef}
              required
            ></Form.Control>
          </Form.Group>
          <Button
            variant="flat"
            disabled={loading}
            className="login-btn"
            type="submit"
          >
            Log In
          </Button>
        </Form>
        <div className="subtext">
          <NavLink className="link" to="/forgot-password">
            Forgot Password?
          </NavLink>
        </div>

        <div className="subtext">
          Don't have an account?{" "}
          <NavLink className="link" to="/signup">
            Sign up here
          </NavLink>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
