import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="App">
      <div className="Login">
        <div className="heading">
          <h2 className="header">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="update-grouping" onSubmit={handleSubmit}>
            <Form.Group className="form-group">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                className="input"
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                className="input"
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label className="label">Password Confirmation</Form.Label>
              <Form.Control
                className="input"
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button className="login-btn" disabled={loading} type="submit">
              Update
            </Button>
          </Form>
          <div className="subtext">
            <NavLink className="link" to="/profile">
              Cancel
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
