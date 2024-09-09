
import { useContext, useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./AnimalFile.module.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import animalsService from "../../services/animalsService";

export default function AnimalFile() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const { animalId } = useParams();
    const [animal, setAnimal] = useState<Animal>();

    useEffect(() => {
        const getAnimal = async () => {
            const animal = await animalsService.getAnimalById(number(animalId));
            setAnimal(animal);
        };
        getAnimal();
    },[animalId]);
    

    const onDeleteAnimalClickHandler = (animalId: string) => {
       //const animalIndex = dummyAnimals.findIndex((a) => a.id === animalId);

       //if (animalIndex === -1) {
        //return;
      // }

       //dummyAnimals.splice(animalIndex, 1);

       //setAnimal(dummyAnimals.find((a) => a.id === animalId));
    }


    return animal? (
        <Container className={classes.container + " mt-5"}>
            <Row className = {classes.animal_title + " mt-4 mb 5"}>
            <h1><strong> {animal.name}</strong></h1>
            </Row>
            <Row>
                <h4><strong>{animal.sex}</strong></h4>
                <Button onClick = {() => navigate(`/my_herdbook/animals/${animalId}`)} className = {classes.form_btn} variant = "info">Edit<FaRegEdit /></Button>
                <p>Important Events: {animal.importantEvents}</p>
                <p>Animal Details: {animal.details}</p>
                <p>Veterinary Notes: {animal.veterinaryNotes}</p>
                <p>HerdBook: {user!.herdBookName}</p>
                <Button onClick = {() => onDeleteAnimalClickHandler(animal.id)} className = {classes.form_btn} variant = "danger">Delete<MdDeleteForever /></Button>
            </Row>
        </Container>
    ) : (<div>Animal Details Page for animal with id of: { animalId } could not be found! </div>);
}
