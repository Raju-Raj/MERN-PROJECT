import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import '../App.css'




const NavbarHeader = () => {
    return (
        <div>
   <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Routing</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/" className="raj">Home</Link></Nav.Link>
      <Nav.Link><Link to="/contact" className="raj">Contact</Link></Nav.Link>
      <Nav.Link><Link to="/about" className="raj">About</Link></Nav.Link>
      <Nav.Link><Link to="/signup" className="raj">SignUp</Link></Nav.Link>
      <Nav.Link><Link to="/data" className="raj">Data</Link></Nav.Link>
      <Nav.Link><Link to="/download" className="raj">Download</Link></Nav.Link>
      <Nav.Link><Link to="/search" className="raj">Search</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
        </div>
    )
}

export default NavbarHeader
