import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Logo.png'
import '../styles/Header.css'


const Header = () => {
  return (
    <Navbar class="navbar-custom" sticky="top" expand="lg" variant="dark">
  <Container >
  <img className="logo-image" src={Logo} alt="Logo" variant="dark"/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#index">Home</Nav.Link>
        <Nav.Link href="#whyPage">Why QLogistics</Nav.Link>
        <Nav.Link href="#featuresPage">Features</Nav.Link>
        <Nav.Link href="#productPage">Product</Nav.Link>
        <Nav.Link href="#contactPage">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}


export default Header