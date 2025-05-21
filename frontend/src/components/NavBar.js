
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logoremover.png'
import '../components/styles.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand  className="brand"> <img src={logo} alt="Logo" className="rotate"/>
        MindBloom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="custom-nav-link" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="custom-nav-link" as={Link} to="/about">About</Nav.Link>
          <Nav.Link className="custom-nav-link" as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <Button variant="outline-light">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
