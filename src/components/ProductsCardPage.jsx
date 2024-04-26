import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaIndianRupeeSign } from "react-icons/fa6";

function ProductsCardPage({ item }) {
  // console.log(item);
  return (
    <Card style={{ width: "18rem" }} className="Card-details">
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title className="title">{item.title}</Card.Title>
        <Card.Title className="price">Price : Rs.{item.price} </Card.Title>
        <Button variant="primary" className="cardbtn">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCardPage;
