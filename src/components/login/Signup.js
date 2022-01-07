import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="App">
      <div className="Signup">
        <div className="heading">
          <h2 className="chrome ">Sign Up</h2>
          <div className="header">
            The adventure begins here
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
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label className="label">Confirm Password</Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  ref={passwordConfirmRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button className="login-btn" disabled={loading} type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </div>
        <div className="subtext">
          Already have an account?{" "}
          <NavLink className="link" to="/">
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
}
