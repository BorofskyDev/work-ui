import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import '../../App'

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
    <>
      <style type="text/css">
        {`
        .btn-flat {
          position: relative;
          display: inline-block;
          background-color: transparent;
          color: #a9d5f4;
          font-size: 1rem;
          border-radius: 20px;
          width: 50%;
          transition: .5s;
          letter-spacing: 4px;
        }
        `}
      </style>

      <div>
        {/* <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <source src={videoFive} type="video/mp4" />
                </video> */}

        <container className="box">
          <div className="container">
            <div className="flex-column flex-center">
              <h1 class="chrome">ASIMOV ADVENTURES</h1>
            </div>
          </div>
          <h2 className="login-head">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="login-form" id="email">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                className="bg-transparent text-white rounded-pill"
                type="email"
                ref={emailRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-4" id="password">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                className="bg-transparent text-white rounded-pill"
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
          <div className="w-100 text-center mt-3">
            <NavLink to="/forgot-password">Forgot Password?</NavLink>
          </div>

          <div className="w-100 text-center mt-3 text-white font-control-sm">
            Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
          </div>
          <div>
            <h1></h1>
          </div>
        </container>
      </div>
    </>
  );
}
