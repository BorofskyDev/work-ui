import React from 'react';
import { FaJediOrder } from 'react-icons/fa'

function User() {
    return (
        <div className='User'>
            <div className="logo">
                <h1 className="image"><FaJediOrder /></h1>
            </div>
            <div className='info'>
                <p>Star Tours</p>
                <a href='#'>Logout</a>
            </div>
        </div>
    )
}

export default User
