import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./AnimalFormPage.module.css";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { useNavigate } from "react-router-dom";
import Animal from "../../models/Animal";



export default function AnimalFormPage() {
    const [isValidated, setValidated] = useState(false);
    const [id, setId] = useState("");
    const [sex, setSex] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfDeath, setDateOfDeath] = useState("");
    const [whenBought, setWhenBought] = useState("");
    const [boughtPrice, setBoughtPrice] = useState("");
    const [whenSold, setWhenSold] = useState("");
    const [soldPrice, setSoldPrice] = useState("");
    const [whenCalved, setWhenCalved] = useState("");
    const [calfWeight, setCalfWeight] = useState("");
    const [healthNotes, setHealthNotes] = useState("");
    const [disposition, setDisposition] = useState("");
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
            dateOfBirth: new Date(),
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
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date of Birth:</Form.Label>
                        <Form.Control
                         type="date" 
                         value = {dateOfBirth}
                         onChange= {(e) => setDateOfBirth(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date of Death:</Form.Label>
                        <Form.Control
                         type="date" 
                         value = {dateOfDeath}
                         onChange= {(e) => setDateOfDeath(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date of Purchase:</Form.Label>
                        <Form.Control
                         type="date" 
                         value = {whenBought}
                         onChange= {(e) => setWhenBought(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Purchase Price:</Form.Label>
                        <Form.Control
                         type="number" 
                         value = {boughtPrice}
                         onChange= {(e) => setBoughtPrice(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date Sold:</Form.Label>
                        <Form.Control
                         type="date" 
                         value = {whenSold}
                         onChange= {(e) => setWhenSold(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sold Price:</Form.Label>
                        <Form.Control
                         type="number" 
                         value = {soldPrice}
                         onChange= {(e) => setSoldPrice(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date Calved:</Form.Label>
                        <Form.Control
                         type="date" 
                         value = {whenCalved}
                         onChange= {(e) => setWhenCalved(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Calf Weight:</Form.Label>
                        <Form.Control
                         type="number" 
                         value = {calfWeight}
                         onChange= {(e) => setCalfWeight(e.target.value)}
                         />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Health Notes:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value = {healthNotes}
                            onChange = {(e) => setHealthNotes(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Disposition or other notes:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value = {disposition}
                            onChange = {(e) => setDisposition(e.target.value)}/>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
}