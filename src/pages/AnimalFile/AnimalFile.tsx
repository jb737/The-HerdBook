
import { useContext, useEffect, useState } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
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


    const [animal, setAnimal] = useState<Animal>({} as Animal);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const getAnimal = async () => {
            try {
                const animal = await animalsService.getAnimalById(Number(animalId));
                setAnimal(animal);
            } catch (error) {
              setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getAnimal();
    },[animalId, hasError]);
    

    const onDeleteAnimalClickHandler = async (animalId: number) => {
        try {
            animalsService.deleteAnimal(animalId);
            return;
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    
    };

    const pageContents = <Container className={classes.container + " mt-5"}>
        {isLoading ? (<h5>Loading...</h5>) : (
            <div>
                <Row className = {classes.animal_title + " mt-4 mb 5"}>
                    <h1><strong> {animal!.name}</strong></h1>
                </Row>
                <Row>
                    <h4><strong>{animal!.sex}</strong></h4>
                        <Button onClick = {() => navigate(`/my_herdbook/animals/${animalId}`)} className = {classes.form_btn} variant = "info">Edit<FaRegEdit /></Button>
                            <p>Important Events: {animal!.importantEvents}</p>
                            <p>Animal Details: {animal!.details}</p>
                            <p>Veterinary Notes: {animal!.veterinaryNotes}</p>
                        <Button onClick = {() => onDeleteAnimalClickHandler(animal!.id)} className = {classes.form_btn} variant = "danger">Delete<MdDeleteForever /></Button>
                </Row>
            </div>
        )}
            
        </Container>

    return animal? (
        <div>
      {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
    ) : (<div>Animal Details Page for animal with id of: { animalId } could not be found! </div>);
}
