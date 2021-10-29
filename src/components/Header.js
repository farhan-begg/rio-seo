import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Navbar.Text >
             Menu 
            </Navbar.Text>
            <Navbar.Text className="ms-4">
             Truck Locator
             <i className="bi bi-geo-alt ms-2"></i>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
