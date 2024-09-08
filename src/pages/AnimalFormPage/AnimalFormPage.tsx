import {  useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./AnimalFormPage.module.css";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { useNavigate } from "react-router-dom";


export default function AnimalFormPage() {
    const [isValidated, setValidated] = useState(false);
    const [id, setId] = useState("");
    const [sex, setSex] = useState("");
    const [details, setDetails] = useState("");
    const [importantEvents, setImportantEvents] = useState("");
    const [veterinaryNotes, setVeterinaryNotes] = useState("");

  

    const navigate = useNavigate();


    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }

        const newAnimal = {
            id ,
            sex,
            importantEvents,
            details,
            veterinaryNotes,
          
        }
    
    dummyAnimals.push(newAnimal);

    navigate(`/animals/${newAnimal.id}`);
    };
       

    return(
        <Container>
            <Row className="mt-5"> <h1>Add an Animal:</h1></Row>
            <Form noValidate validated={isValidated} onSubmit={onSubmitHandler}>
                <Row className = "text-center mt-5 mb-5">
                <Row ><Button className = {classes.submit_btn +" mb-3"} type = "submit" variant="success">Put this record in the Herd Book</Button></Row>
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
            </Form>
        </Container>
    );
}