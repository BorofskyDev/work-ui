import React, { useContext, useEffect, useRef } from 'react'
import { FaAmazon, FaFacebook, FaFacebookMessenger, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SiLinkedin, SiMicrosoftexcel } from 'react-icons/si'
import { TiWeatherStormy } from 'react-icons/ti'
import { TodoContext } from '../context'
import { GiHammerSickle, GiNewspaper } from 'react-icons/gi'
import { VscGraphLine } from 'react-icons/vsc'
import { SiMicrosoftword } from 'react-icons/si'

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
            <div className='icons'>
                
                <TiWeatherStormy className='stormy' />
                <GiNewspaper className='news' />
                <VscGraphLine className='stocks' />
            </div>
            <div className='icons'>
                
                <SiMicrosoftword className='micro-word' />
                <SiMicrosoftexcel className='excel' />
                <AiOutlineMail className='icon-email' />
            </div>
            <div className='icons'>
                
                <FaAmazon className='linkedIn' />
                <FaFacebook className='gitHub' />
                <FaFacebookMessenger className='twitter' />
            </div>
                
                
            
        </div>
    )
}

export default Sidebar
