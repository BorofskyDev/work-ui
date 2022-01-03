import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CenteredContainer from './CenteredContainer';

export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth()
    let navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/')
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email: {currentUser.email}</strong>
                    <NavLink to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</NavLink>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button onClick={handleLogout}>Log Out</Button>
            </div>
            <div className="w-100 text-center mt-2">
                Actually, I'm good. <NavLink to="/dashboard">Take me back to the Dashboard</NavLink>

            </div>
        </CenteredContainer>
    )
}