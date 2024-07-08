import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Glamorize Time</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact activeStyle={{fontWeight: "bold", color: "blue"}}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/makeup" activeStyle={{fontWeight: "bold", color: "blue"}}>Makeup</Nav.Link>
              <Nav.Link as={NavLink} to="/hair-products" activeStyle={{fontWeight: "bold", color: "blue"}}>Hair Products</Nav.Link>
              <Nav.Link as={NavLink} to="/perfumes" activeStyle={{fontWeight: "bold", color: "blue"}}>Perfumes</Nav.Link>
              <Nav.Link as={NavLink} to="/product-of-the-day" activeStyle={{fontWeight: "bold", color: "blue"}}>Product of the Day</Nav.Link>
              <Nav.Link as={NavLink} to="/chat" activeStyle={{fontWeight: "bold", color: "blue"}}>Chat</Nav.Link>
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
