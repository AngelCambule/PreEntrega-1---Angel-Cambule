import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg"  bg="secondary">
        <Link to="/"><Navbar.Brand href="#">DECO_SILLONESNYA</Navbar.Brand></Link>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Link to="/" style={{textDecoration:"none"}}><Nav.ItemLink text="light" active>Inicio</Nav.ItemLink></Link>
            <Nav.Item dropdown>
              <Nav.Link text="light" dropdownToggle>Productos</Nav.Link>
              <Dropdown.Menu bg="secondary">
                <Link to='/products/category/jardin' style={{textDecoration:"none"}}><Dropdown.Item text="light" bg="secondary" style={{textDecoration:"none"}}>Jardin</Dropdown.Item></Link>
                <Link to='/products/category/interior' style={{textDecoration:"none"}}><Dropdown.Item bg="secondary" text="light">Interior</Dropdown.Item></Link>
                <Link to='/products/category/mesa' style={{textDecoration:"none"}}><Dropdown.Item bg="secondary" text="light">Mesas</Dropdown.Item></Link>
                <Dropdown.Divider />
                <Link to='/products/category/combos' style={{textDecoration:"none"}}><Dropdown.Item bg="secondary" text="light">Combos</Dropdown.Item></Link>
                <Link to='/products/category/unidad' style={{textDecoration:"none"}}><Dropdown.Item bg="secondary" text="light">Por Unidad</Dropdown.Item></Link>
                <Dropdown.Divider />
                <Link to='/products' style={{textDecoration:"none"}}><Dropdown.Item bg="light" text="dark" >Ver Todo</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Nav.Item>
            <Link to='/reclamo' style={{textDecoration:"none"}}><Nav.ItemLink text="light">Reclamos</Nav.ItemLink></Link>
            <Link to='/contacto' style={{textDecoration:"none"}}><Nav.ItemLink text="light">Contactanos</Nav.ItemLink></Link>
            <Link to='/seguimiento' style={{textDecoration:"none"}}><Nav.ItemLink text="light" ml="4">Segui tu Pedido</Nav.ItemLink></Link>
          </Navbar.Nav>
        </Collapse>
        <CartWidget />
      </Navbar>
    )
  }
}