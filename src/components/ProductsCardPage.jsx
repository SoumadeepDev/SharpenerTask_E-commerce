import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context";
import { useLocation } from "react-router-dom";
import "../components/Swiper.css";
import { Link } from "react-router-dom";

function ProductsCardPage({ item }) {
  const { addToCart } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/store") {
      document.body.classList.remove("about-bg");
      document.body.classList.remove("home-bg");
    } else {
      document.body.classList.remove("about-bg");
    }
  }, [location.pathname]);

  return (
    <Card style={{ width: "18rem" }} className="Card-details">
      <Link to={`/movie/${item.id}`} className="movie-link">
        <Card.Img variant="top" src={item.imageUrl} />
      </Link>
      <Card.Body>
        <Card.Title className="title">{item.title}</Card.Title>
        <Card.Title className="price">Price : Rs.{item.price} </Card.Title>
        <Card.Title className="title">
          {item.stock > 0 ? (
            "Stock : " + item.stock
          ) : (
            <p style={{ color: "red", textAlign: "center" }}>
              {"  "}
              No Stock Available
            </p>
          )}
        </Card.Title>
        <Button
          variant="primary"
          className="cardbtn"
          onClick={() => addToCart(item.id)}
        >
          Buy Ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCardPage;
