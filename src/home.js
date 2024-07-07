// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Glamorize Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/makeup">Makeup</Nav.Link>
              <Nav.Link as={Link} to="/hair-products">Hair Products</Nav.Link>
              <Nav.Link as={Link} to="/perfumes">Perfumes</Nav.Link>
              <Nav.Link as={Link} to="/product-of-the-day">Product of the Day</Nav.Link>
              <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h1>Welcome to Glamorize Time</h1>
        <p>Your go-to place for beauty products and community discussions.</p>
      </Container>
    </div>
  );
}

export default Home;
