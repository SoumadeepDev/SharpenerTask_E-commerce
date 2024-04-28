import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";
import { useContext, useEffect } from "react";

const NavBar = () => {
  const { cartElement } = useContext(AppContext);

  // Calculate the total quantity of items in the cart
  const totalQuantity = cartElement.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar expand="lg" fixed="top" className="nav">
      <Container>
        <Link to="/" className="link">
          <Navbar.Brand>SHARPENER TECH PROJECT</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                STORE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="link">
            <div className="d-flex nav-container">
              <FaCartPlus className="cart-icon" />
              <p>Your Cart</p>
              <div className="amount-container">
                <p className="total-amount">{totalQuantity}</p>
              </div>
            </div>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
