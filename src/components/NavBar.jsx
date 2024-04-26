import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
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
        <Link to="/" className="link">
          <Navbar.Brand href="#home">SHARPENER TECH PROJECT</Navbar.Brand>{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>

            <Nav.Link href="/store">STORE</Nav.Link>

            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
          <Link to="/cart" className="link">
            <div className="d-flex nav-container">
              <FaCartPlus className="cart-icon" />
              <p>Your Cart</p>
              <div className="amount-container">
                <p className="total-amount">0</p>
              </div>
            </div>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
