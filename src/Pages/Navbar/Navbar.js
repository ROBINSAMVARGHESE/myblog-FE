import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbardesign() {
  return (

    <Navbar bg="dark" variant="dark">
      <Container className="text-center"> 
        <Navbar.Brand className="text-white">Blog Page</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="text-white" href="home">Home</Nav.Link>
          <Nav.Link className="text-white" href="Signup">Signup</Nav.Link>
          <Nav.Link className="text-white" href="Login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
  );
}

export default Navbardesign;

