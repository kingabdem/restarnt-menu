import { Card } from "react-bootstrap";
import "./itemsListStyle.css";

export default function ItemsList({dataList}) {
  return (
    
    <div className="mt-5 mb-5">

      {dataList.length == 0 ? <h2 className="text-center mt-5">We don't have this food in our menu</h2> :

      dataList.map((e,i)=>(
        <Card key={i} className="carteFood d-flex flex-row my-4">
              <Card.Body className="carteFoodBody">
                <div>
                   <img className="imgItems" src={e.image} />
                </div>
                <div className="w-100 mt-2">
                  <div className="d-flex justify-content-between">
                     <Card.Title className="titre-carte">{e.title}</Card.Title>
                     <span className="price">{e.price} $</span>
                  </div>
                  <Card.Text className="d-grid">
                    {e.description}
                    <span className="my-2 fs-5 fw-bold">Country : {e.food}</span>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
      ))
      }

    </div>
  );
}
