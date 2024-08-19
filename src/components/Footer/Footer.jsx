import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import AboutUs from '../Us/AboutUs'
import './Footer.css'

const Footer = () => {
    const WHAP = `https://wa.me/5493444578126`

return (
    <>
    
    <section>
    <div>
    <NavLink to={WHAP} target='_blank'>Whatsapp</NavLink>
    </div>
    <div>
    <NavLink to='/AboutUs'>Nosotros</NavLink>
    </div>
    <div>
    <NavLink to='https://www.instagram.com/pangea.re/'target='_blank'>Instagram</NavLink>
    </div>
    </section>
    </>
    )
}

export default Footer
