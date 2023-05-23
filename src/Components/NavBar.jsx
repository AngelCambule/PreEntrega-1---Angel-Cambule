import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
            <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#">Deco_sillonesNYA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Muebles de Jardin</NavDropdown.Item>
              <NavDropdown.Item href="#">Muebles de Interior</NavDropdown.Item>
              <NavDropdown.Item href="#">Taburetes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Ver Todo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Reclamos</Nav.Link>
            <Nav.Link href="#">Contactanos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;