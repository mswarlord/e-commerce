import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Tres Bastiones</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#pla">PLA</NavDropdown.Item>
                    <NavDropdown.Item href="#resina">Resina</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Otras Categorías
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contactus">Contacto</Nav.Link>
                <Nav.Link href="#joinus">Únete</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#">Iniciar Sesión</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    <CartWidget />
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }

export default NavBar;