import { Card } from "react-bootstrap";
import "./itemsListStyle.css";

export default function ItemsList() {
  return (
    <div>
      <Card className="carteFood d-flex flex-row my-4">
        <Card.Body className="carteFoodBody">
          <div>
             <img className="imgItems" src="imageFood/hamburger.jpg" />
          </div>
          <div className="w-100 mt-2">
            <Card.Title className="titre-carte">Hamburger</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
