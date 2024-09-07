import { useParams } from "react-router-dom"
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { useContext, useState } from "react";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { Card, ListGroup } from "react-bootstrap";

export default function AnimalDetailsPage() {
    const { user } =useContext(UserContext);
    const { animalId } = useParams();
    const [animal, setAnimal] = useState<Animal | undefined>(dummyAnimals.find((p) => p.id === animalId));
    return animal? (
    <div>
        
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{animal.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{animal.sex}</Card.Subtitle>
        <ListGroup.Item>Date of Birth: {animal.dateOfBirth?.toDateString()}</ListGroup.Item>
        <ListGroup.Item>Health Notes: {animal.healthNotes || "No Note Added"}</ListGroup.Item>
      </Card.Body>
    </Card>
    </div>
    ):(
        <div>Animal Details Page for animal with id of: { animalId } could not be found! </div>
    );
}