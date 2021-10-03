import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle ={color: "white", fontWeight: "bold"};
    return (
        <div>
            <Navbar bg="info" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">T0DoLogo</Navbar.Brand>
                        <Nav className="me-auto header-container">
                            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink ctiveStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink ctiveStyle={activeStyle} to="/contact">Contact Us</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;