
import { useContext, useEffect, useState } from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./AnimalFile.module.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import animalsService from "../../services/animalsService";
import AppError from "../../models/AppError";
import { AxiosError } from "axios";

export default function AnimalFile() {
    const { userId } = useContext(UserContext);
    const navigate = useNavigate()
    const { animalId } = useParams();


    const [animal, setAnimal] = useState<Animal>({} as Animal);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<AppError | undefined>();
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const getAnimal = async () => {
            try {
                const animal = await animalsService.getAnimalById(animalId!);
                setAnimal(animal);
            } catch (error) {
                const e = error as AxiosError;
              setError({ message: e.response?.data as string });
            } finally {
                setIsLoading(false);
            }
        };

        if (animalId) {
            getAnimal();
        }
    }, [animalId, userId]);
    

    const onDeleteAnimalClickHandler = async (animalId: string) => {
        try {

            await animalsService.deleteAnimal(animalId);

            setMyAnimals((prev) => {
              return prev.filter((animal) => animal._id !== animalId);
            });

            navigate("/");
        } catch (error) {
            const e = error as AxiosError;
            setError({ message: e.response?.data as string });
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
                        <Button onClick = {() => navigate(`/:userId/animals/${animal._id}`)} className = {classes.form_btn} variant = "info">Edit<FaRegEdit /></Button>
                           
                            <p>Animal Details: {animal!.details}</p>
                            <p>Important Events: {animal!.importantEvents}</p>
                            <p>Veterinary Notes: {animal!.veterinaryNotes}</p>
                        <Button onClick = {() => onDeleteAnimalClickHandler(animal!._id)} className = {classes.form_btn} variant = "danger">Delete<MdDeleteForever /></Button>
                </Row>
            </div>
        )}
            
        </Container>

    return animalId? (
        <div>
      {error ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
    ) : (<div>Animal Details Page for animal with id of: { animalId } could not be found! </div>);
}
