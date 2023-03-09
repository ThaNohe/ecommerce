//import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='nav-container'>
            {/* <img className='img-title-h' alt="Logo de la empresa" >🌎</> */}
            <nav className='navbar'>
            <h1 className='navbar-logo'>Saga Falabella.com</h1>
            <h2 className='seeCarrito'>🛒</h2>
            </nav>
        </div>
    )
}
export default Header