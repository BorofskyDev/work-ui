import React, { useContext, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'
import { TodoContext } from '../context'

function Sidebar({ children }) {
    const { setSelectedTodo } = useContext(TodoContext)
    const sidebarRef = useRef()

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    const handleClick = e => {
        if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
            setSelectedTodo(undefined)
        }
    }
    return (
        <div 
            className='Sidebar'
            ref={sidebarRef}    
        >
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
