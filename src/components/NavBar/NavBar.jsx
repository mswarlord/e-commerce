import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavLink to='/' className='NavBrand NavLink'>Tres Bastiones</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <div className='NavList'>
                                <NavLink to='/category/accesorios' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}> Accesorios </NavLink>
                                <NavLink to='/category/hogar' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}> Hogar </NavLink>
                                <NavLink to='/category/hobbie' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}> Hobbie </NavLink>
                                <NavLink to='/category/esculturas' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}>Esculturas</NavLink>
                                <NavLink to='/category/soportes para joystick' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}>Soportes para Joysticks</NavLink>
                                <NavDropdown.Divider />
                                <NavLink to='/category/otros' className={({isActive}) => isActive ? 'ActiveNavItem' : 'NavItem'}>
                                        Otras Categorías
                                </NavLink>
                            </div>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavLink className='nav-link' to='/cart'>
                                <CartWidget />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default NavBar;