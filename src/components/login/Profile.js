import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <div className="App">
      <div className="Profile">
        <div className="heading">
          <h2 className="chrome">Your Information</h2>
          <div className="form-grouping">
            {error && <Alert variant="danger">{error}</Alert>}
            <strong className="form-group">Email: {currentUser.email}</strong>
          </div>
          <NavLink to="/update-profile" className="link">
            Update Profile
          </NavLink>
        </div>
        <div className="w-100 text-center mt-2">
          Actually, I'm good.{" "}
          <NavLink className="link" to="/dashboard">
            Take me back to the Dashboard
          </NavLink>
        </div>
        <div className="w-100 text-center mt-2">
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      </div>
    </div>
  );
}
