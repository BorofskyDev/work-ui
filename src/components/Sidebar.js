import React from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'

function Sidebar({ children }) {
    return (
        <div className='Sidebar'>
            {children}
            <div className='icons'>
                
                <SiLinkedin className='linkedIn' />
                <FaGithub className='gitHub' />
                <FaTwitter className='twitter' />
            </div>
                
                
            
        </div>
    )
}

export default Sidebar
