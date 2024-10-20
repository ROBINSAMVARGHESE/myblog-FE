import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './RootlayOut.css';
import Footerdesign from "../Pages/Footer/Footer";

function RootLayout() {
  return (
    <div className="main-container">
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand  className="text-bolder">Blog Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home" className="text-bolder">Home</Nav.Link>
              <Nav.Link href="blog" className="text-bolder">Blog</Nav.Link>
            </Nav>
            <div className="btn-container">
              <button className="btn-login custom-btn" onClick={() => window.location.href = 'login'}>
                Login
              </button>
              <button className="btn-signup custom-btn" onClick={() => window.location.href = 'signup'}>
                Signup
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>

      <Footerdesign />
    </div>
  );
}

export default RootLayout;
