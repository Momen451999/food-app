import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navs.css';
import logo from './../../assets/logo.png';
const Navs = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link> {/* Changed href to a unique id */}
                        <Nav.Link href="#explore">Explore Foods</Nav.Link> {/* Changed href to a unique id */}
                        <Nav.Link href="#reviews">Reviews</Nav.Link> {/* Changed href to a unique id */}
                        <Nav.Link href="#faq">FAQ</Nav.Link> {/* Changed href to a unique id */}
                    </Nav>
                    <Nav>
                        <Nav.Link id="lastnav" href="#contact">295 617 645</Nav.Link> {/* Added href attribute */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;
