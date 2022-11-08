import React from 'react'
import './Logo.css'
const Logo = () => {
    return (
        <div className='logoContainer'>
            <div className='logo'>
                <div className='logo1'></div>
                <div className='logo2'></div>
                <div className='logo3'></div>
            </div>
            <div className='tituloLogoContainer'>
                <h1 className='titulo'>Tres Bastiones</h1>
                <h2 className='subtitulo'>3D Prints</h2>
            </div>
        </div>
    )
}

export default Logo;