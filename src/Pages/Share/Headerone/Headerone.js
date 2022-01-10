import React from 'react';
import { Button,Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Headerone = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home" className='fw-bold'>Doctor Appointment</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={HashLink} to="/home#home" className='fw-bold'>Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services" className='fw-bold'>Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#aboutus" className='fw-bold'>About Us</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link eventKey={2} href="#memes" className='fw-bold'>
                        Hi'{user?.displayName}
                    </Nav.Link> 
                    {user?.email?
                        <Button className='fw-bold btn-light' onClick={logOut}>Logout</Button> : 
                        <Nav.Link as={Link} to="/login" className='fw-bold'><Button className='btn btn-warning fw-bold'>Login</Button></Nav.Link> }                  
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    );
};

export default Headerone;