import { Card, ListGroup } from "react-bootstrap";
import classes from "./AnimalCard.module.css";

export default function AnimalCard() {
    return (
    <div >
        <Card className={classes.card_body}style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Animal Name</Card.Title>
            <Card.Text>
              Disposition or other description here
            </Card.Text>
          </Card.Body >
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Sex:</ListGroup.Item>
            <ListGroup.Item>Date of Birth</ListGroup.Item>
            <ListGroup.Item>Date of Purchase:</ListGroup.Item>
            <ListGroup.Item>Purchase Location:</ListGroup.Item>
            <ListGroup.Item>Purchase Price:</ListGroup.Item>
            <ListGroup.Item>Date of Calving:</ListGroup.Item>
            <ListGroup.Item>Calf Weight:</ListGroup.Item>
            <ListGroup.Item>Date of Purchase:</ListGroup.Item>
            <ListGroup.Item>Veterinary Notes::</ListGroup.Item>
            <ListGroup.Item>Animal sold?:</ListGroup.Item>
            <ListGroup.Item>Sale Date:</ListGroup.Item>
            <ListGroup.Item>Sale Location:</ListGroup.Item>
            <ListGroup.Item>Sale Price:</ListGroup.Item>
            <ListGroup.Item>Date of Death:</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Edit File</Card.Link>
            <Card.Link href="#">move to inactive</Card.Link>
          </Card.Body>
        </Card>
    </div>
      );
      
}