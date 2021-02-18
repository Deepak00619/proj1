import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


//mr-auto
const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer to='/login'>
            <NavDropdown.Item>Login</NavDropdown.Item>
            </LinkContainer>
              <LinkContainer to='/'>
              <NavDropdown.Item href="/">Register</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to='/about'>
              <NavDropdown.Item> Company Info</NavDropdown.Item>
              </LinkContainer>
              
            </NavDropdown>
            <LinkContainer to='/about'>
            <Nav.Link to='/about'>Company Info</Nav.Link>
            </LinkContainer>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
        </>
    )
}

export default Header
