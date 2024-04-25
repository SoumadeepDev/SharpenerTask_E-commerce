import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
      className="nav"
    >
      <Container>
        <Navbar.Brand href="#home">SHARPENER TECH PROJECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#store">STORE</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="d-flex nav-container">
            <FaCartPlus className="cart-icon" />
            <p>Your Cart</p>
            <div className="amount-container">
              <p className="total-amount">0</p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
