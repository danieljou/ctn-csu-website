
import React from 'react'
import './header.css'
import logo from '../../assets/csu.webp'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt='Logo' />
            </div>
            <div className="menu">
                <div className="link">
                    <NavLink className='single-link' to='/' >Acceuil</NavLink>
                </div>
                <div className="link">
                    <NavLink className='single-link' to='about' >A Propos</NavLink>
                </div>
                <div className="link">
                    <NavLink className='single-link' to='missions'> Mission </NavLink>
                </div>
                <div className="link">
                    <NavLink className='single-link' to='contacts'>Contacts</NavLink>
                </div>

            </div>
        </div>
    )
}

export default Header