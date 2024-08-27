import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import classes from "./CreateHerdBook.module.css";
import CreateHerdBookFormInput from "../../components/CreateHerdBookFormInput/CreateHerdBookFormInput";


const CreateHerdBook = (): JSX.Element => {

    const [validated, setValidated] = useState(false);


    const [herdBookName, setHerdBookName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cattleType, setCattleType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();

        setValidated(true);

        
        if (form.checkValidity() === false) {
            alert("Please fill all required fields");
            return;
        }

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
                <h3>Create Your Herd Book:</h3>
            </Row>
            <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
            <fieldset>
            <Row>
                <Col>
                <CreateHerdBookFormInput
                    type = "text"
                    required
                    title = "HerdBook Name"
                    value = {herdBookName}
                    onChange={(e) => setHerdBookName(e.target.value.trim())}
                    errorMessage = "Please Provide a Herd Book Name"
                    />
                </Col>
            </Row>
            </fieldset>
            <fieldset>
            <Row>
            <Col>
                <CreateHerdBookFormInput
                    type = "text"
                    required
                    title = "First Name"
                    value = {firstName}
                    onChange={(e) => setFirstName(e.target.value.trim())}
                    errorMessage = "Please Provide a First Name or initial"
                    />
            </Col>
            <Col>
                <CreateHerdBookFormInput
                    type = "text"
                    required
                    title = "Last Name"
                    value = {lastName}
                    onChange={(e) => setLastName(e.target.value.trim())}
                    errorMessage = "Please Provide a Last Name"
                    />
            </Col>
            </Row>
            </fieldset>
            <fieldset>
            <Row>
            <Col>
                <Form.Label htmlFor = "cattleType">Cattle Type:</Form.Label>
                <Form.Control 
                        required
                        as = "select"
                        type = "cattleType"
                        id = "cattleType"
                        value = {cattleType}
                        onChange = {(e) => setCattleType(e.target.value.trim())}
                    >
                        <option></option>
                    <option value = "1">Commercial Beef Cattle</option>
                    <option value = "2">Purebred Beef Cattle</option>
                    <option value = "3">Cattle that someone gave me. Yes, this is my herd</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                            Please choose a Cattle type from the dropdown menu
                        </Form.Control.Feedback>     
            </Col>
            <Col>
                <CreateHerdBookFormInput
                    type = "email"
                    required
                    title = "E-Mail Address"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    errorMessage = "Please provide a valid E-Mail Address"
                    />
            </Col>
        </Row>
        </fieldset>
        <fieldset>
        <Row>
            <Col>
                <CreateHerdBookFormInput
                    type = "password"
                    required
                    title = "Password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value.trim())}
                    errorMessage = "Please provide a unique Password for your HerdBook"
                    />
            </Col>
            <Col>
                <CreateHerdBookFormInput
                    type = "password"
                    required
                    title = "Confirm Password"
                    value = {confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value.trim())}
                    errorMessage = "Please Confirm your HerdBook Password"
                    />
            </Col>
            </Row>
                {password !== confirmPassword &&<Row className = {classes.error_message}>Passwords Do Not Match!</Row>}
                </fieldset>
                <div className = {classes.submit_btn_container}>
          <Button
                disabled = {
                    password !== confirmPassword || 
                    !herdBookName || 
                    !firstName || 
                    !lastName || 
                    !cattleType || 
                    !email
                    } 
                className = {classes.submit_btn}
                type = "submit">Create Herd Book</Button>
                </div>
            </Form>
        </Container>
    );
};

export default CreateHerdBook;



{/*<Button  className = {classes.submit_btn} 
                    type = "submit"
                disabled = {
                    password !== confirmPassword || !herdBookName || !firstName || !lastName || !cattleType || !email
                    } 
                   >Create HerdBook
            </Button>*/}