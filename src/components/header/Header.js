import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="white" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color":'black'}}>
                <FontAwesomeIcon icon={faUtensils}/> Recipe Book
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className ="nav-link" to="/" style={{"color":'black'}}>Home</NavLink>
                    <NavLink className ="nav-link" to="/watchList" style={{"color":'black'}}>Favorite Recipes</NavLink>      
                </Nav>
                <Button variant="outline-info" className="me-2 user" style={{"color":'black'}}>Login</Button>
                <Button variant="outline-info" className="user" style={{"color":'black'}}>Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header