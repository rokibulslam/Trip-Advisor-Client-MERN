import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './NavBar.css'


const NavBar = () => {
    const { user, logOut } = useAuth()
    
    return (
        <div>
            <Navbar className="nav-color sticky-top overflow-hidden navbar " variant="light" collapseOnSelect expand="lg" >
            <Container>
                    <Navbar.Brand className="fw-bolder "><img className="rounded-3" alt="" />TAdvisor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={HashLink} className="text-decoration-none fw-bold text-black"  to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none fw-bold px-2 text-black"  to="/home#hotels">Services</Nav.Link>
                {user?.email ? <Nav.Link as={HashLink} className="text-decoration-none  fw-bold px-2 text-black" to="/myOrders">My Order</Nav.Link>: ''}
                {user?.email ? <Nav.Link as={HashLink} className="text-decoration-none fw-bold px-2  text-black" to="/admin">Admin Dashboard</Nav.Link> : ''}
                
                <Nav.Link as={HashLink} className="text-decoration-none px-2  fw-bold text-black" to="/about">About Us</Nav.Link>
                </Nav>
                <Nav className="justify-content-center align-items-center">
                {user.email ? <button className="button text-black p-2"  onClick={logOut}>Sign Out</button> :
                <Nav.Link as={HashLink} className="button text-black m-2" to="/signIn">Sign in</Nav.Link>}
                {user?.email ? <p className="mb-0 ps-3 text-black"> {user.displayName}</p> 
                                : <Nav.Link as={HashLink} className="button text-black" to="/signUp">Sign Up</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default NavBar;