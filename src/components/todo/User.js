import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'
import { FaJediOrder } from 'react-icons/fa'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

function User() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth()
    let navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to logout')
        }
    }

    return (
        <div className='User'>
            <div className="logo">
                <h1 className="image"><FaJediOrder /></h1>
            </div>
            <div className='info'>
                <NavLink to='/update-profile'>Profile</NavLink>
                {error && <Alert variant='danger'>{error}</Alert>}
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default User
