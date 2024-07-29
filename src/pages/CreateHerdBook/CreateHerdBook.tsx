import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import classes from "./CreateHerdBook.module.css";

//TODO: 1:37:06 in video 12. Still need to add form validation

const CreateHerdBook = (): JSX.Element => {

    const [herdBookName, setHerdBookName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cattleType, setCattleType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        alert (JSON.stringify({
            herdBookName,
            firstName,
            lastName,
            cattleType,
            email,
            password,
            confirmPassword,
        }));
        
        alert
    }


    return (
        <Container className = {classes.container + " center"}>
            <Row className = {classes.title}>
                <h3>Create Your HerdBook:</h3>
            </Row>
            <Form onSubmit={onSubmitHandler}>
            <Row>
                <Col>
                <Form.Label htmlFor = "herdBookName">Your HerdBook Name:</Form.Label>
                    <Form.Control
                        type = "herdBookName"
                        id = "herdBookName"
                        placeholder = "example: Spicy Cow Farms"
                        value = {herdBookName}
                        onChange = {(e) => setHerdBookName(e.target.value)}
                    />
                </Col>
            </Row>
            <Row>
            <Col>
                <Form.Label htmlFor = "firstName">First Name:</Form.Label>
                    <Form.Control
                        type = "firstName"
                        id = "firstName"
                        value = {firstName}
                        onChange = {(e) => setFirstName(e.target.value)}
                    />
            </Col>
            <Col>
                <Form.Label htmlFor = "lastName">Last Name:</Form.Label>
                    <Form.Control
                        type = "lastName"
                        id = "lastName"
                        value = {lastName}
                        onChange = {(e) => setLastName(e.target.value)}
                    />
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Label htmlFor = "cattleType">Cattle Type:</Form.Label>
                <Form.Control 
                        as = "select"
                        type = "cattleType"
                        id = "cattleType"
                        value = {cattleType}
                        onChange = {(e) => setCattleType(e.target.value)}
                    >
                    <option>Select Cattle Type:</option>
                    <option value = "1">Commercial Beef Cattle</option>
                    <option value = "2">Purebred Beef Cattle</option>
                    <option value = "3">Cattle that someone gave me. Yes, this is my herd</option>
                </Form.Control>
            </Col>
            <Col>
                <Form.Label htmlFor = "email">E-Mail Address:</Form.Label>
                    <Form.Control
                        type = "email"
                        id = "email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
            </Col>
        </Row>
        <Row>
            <Col>
            <Form.Label htmlFor = "password">Password</Form.Label>
                <Form.Control
                    type = "password"
                    id = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                 />
            </Col>
            <Col>
            <Form.Label htmlFor = "confirmPassword">Confirm Password</Form.Label>
                <Form.Control
                    type = "password"
                    id = "confirmPassword"
                    value = {confirmPassword}
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                 />
            </Col>
            </Row>
            <Button className = {classes.submit_btn} type = "submit">Create HerdBook</Button>
            </Form>
        </Container>
    );
};

export default CreateHerdBook;