import React from 'react'

const Navbar = () => {
    const openToggle = () => {        
        document.getElementsByClassName('nav-menu')[0].classList.add('active')
        document.getElementsByClassName('nav-mobile-header')[0].classList.add('active')
    }

    const closeToggle = () => {
        document.getElementsByClassName('nav-menu')[0].classList.remove('active')
        document.getElementsByClassName('nav-mobile-header')[0].classList.remove('active')
    }

    return (
        <div className="navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <a href="#!">LOGO</a>
                </div>
                <i className="fas fa-bars" id="toggle-open" aria-hidden="true" onClick = {openToggle}></i>
                <nav className="nav-menu">
                    <div className="nav-mobile-header">
                        <i className="fas fa-times" id="toggle-close" aria-hidden="true" onClick = {closeToggle}></i>
                    </div>
                    
                    <a href="#!">Item1</a>
                    <a href="#!">Item2</a>
                    <a href="#!">Item3</a>
                    <a href="#!">Item4</a>
                    <a href="#!">Item5</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar