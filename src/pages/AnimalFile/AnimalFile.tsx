
import { useState } from "react";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from "./AnimalFile.module.css";

export default function AnimalFile() {
    const { animalId } = useParams();
    const [animal] = useState(dummyAnimals.find((p) => p.id === animalId));
    return animal? (
        <Container className={classes.container + " mt-5"}>
            <Row className = {classes.animal_title + " mt-4 mb 5"}>
            <h1><strong> {animal.id}</strong></h1>
            </Row>
            <Row>
                <h4><strong>{animal.sex}</strong></h4>
                <p>Important Events: {animal.importantEvents}</p>
                <p>Animal Details: {animal.details}</p>
                <p>Veterinary Notes: {animal.veterinaryNotes}</p>
            </Row>
        </Container>
    ) : (<div>Animal Details Page for animal with id of: { animalId } could not be found! </div>);
}
