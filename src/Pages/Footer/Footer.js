import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css';  

function FooterDesign() {
  return (
    <footer className="custom-footer">
      <Container>
        <Navbar expand="lg" className="footer-navbar">
          <Container className="text-center">
            <Navbar.Brand className="footer-text">© 2024 Blog Page</Navbar.Brand>
            <div className="footer-links">
              <a href="/about" className="footer-link">About Us</a>
              <a href="/contact" className="footer-link">Contact</a>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
            </div>
          </Container>
        </Navbar>
      </Container>
    </footer>
  );
}

export default FooterDesign;







