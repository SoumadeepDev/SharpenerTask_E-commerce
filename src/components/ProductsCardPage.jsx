import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductsCardPage({ item }) {
  // console.log(item);
  return (
    <Card style={{ width: "18rem" }} className="Card-details">
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title className="title">{item.title}</Card.Title>
        <Card.Title className="price">PRICE : {item.price}</Card.Title>
        <Button variant="primary" className="cardbtn">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCardPage;
