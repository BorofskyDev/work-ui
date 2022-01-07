import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="loginApp">
      <div className="Login">
        <div className="heading">
          <h2 className="header">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                className="input"
                type="email"
                ref={emailRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button disabled={loading} className="login-btn" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="subtext">
            <NavLink className="link" to="/">
              Log In Here
            </NavLink>
          </div>
        </div>

        <div className="subtext">
          Need an account?{" "}
          <NavLink className="link" to="/signup">
            Sign up here
          </NavLink>
        </div>
      </div>
    </div>
  );
}
