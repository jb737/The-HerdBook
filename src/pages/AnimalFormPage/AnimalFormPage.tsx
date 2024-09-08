import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./AnimalFormPage.module.css";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { useNavigate, useParams } from "react-router-dom";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";

import { IoSendOutline } from "react-icons/io5";


export default function AnimalFormPage() {
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    const { animalId } = useParams();

    const animal = dummyAnimals.find((a) => a.id === animalId && a.herdBookName === user!.herdBookName);

    const [isValidated, setValidated] = useState(false);
    const [id, setId] = useState(animal?.id || "");
    const [sex, setSex] = useState(animal?.sex || "");
    const [details, setDetails] = useState(animal?.details ||"");
    const [importantEvents, setImportantEvents] = useState(animal?.importantEvents || "");
    const [veterinaryNotes, setVeterinaryNotes] = useState(animal?.veterinaryNotes || "");
   

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        const herdBookName = user!.herdBookName;

        const newAnimal: Animal = {
            id ,
            herdBookName,
            sex,
            importantEvents,
            details,
            veterinaryNotes,
        }
    
    dummyAnimals.push(newAnimal);

    navigate(`/animals/${newAnimal.id}`);
    };

       

    return (
        <Container>
            <Row className="mt-5"> <h1>Add an Animal:</h1></Row>
            <Form noValidate validated={isValidated} onSubmit={onSubmitHandler}>
                <Row className = "text-center mt-5 mb-5">
                <Row ><Button className = {classes.submit_btn +" mb-3"} type = "submit" variant="success">Put this record in the Herd Book <IoSendOutline /></Button></Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Animal Name or Id:</Form.Label>
                        <Form.Control
                        required
                         type="id" 
                         value = {id}
                         onChange= {(e) => setId(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Animal Sex:</Form.Label>
                        <Form.Control
                        required
                         type="sex" 
                         value = {sex}
                         onChange= {(e) => setSex(e.target.value.toLowerCase())}
                         />
                    </Form.Group>
                </Col>
                </Row>
               <Row>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Important Events:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    type = "importantEvents"
                    value = {importantEvents}
                    onChange = {(e) => setImportantEvents(e.target.value)} />
                    </Form.Group>
               </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Animal Details</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    type = "details"
                    value = {details}
                    onChange = {(e) => setDetails(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Veterinary Notes:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    type = "veterinaryNotes"
                    value = {veterinaryNotes}
                    onChange = {(e) => setVeterinaryNotes(e.target.value)} />
                    </Form.Group>
                </Row>
                <p>HerdBook: {user!.herdBookName }</p>
            </Form>
        </Container>
    );
}