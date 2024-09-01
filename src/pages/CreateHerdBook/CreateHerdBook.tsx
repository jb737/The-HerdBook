import { Form, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./CreateHerdBook.module.css";
import FormInput from "../../components/FormInput/FormInput";
import CustomCard from "../../components/CustomCard/CustomCard";

const CreateHerdBook = (): JSX.Element => {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const navigate = useNavigate();
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

        navigate("/", {//this is the function that we call, from the useNavigate hook we get a function called navigate with these arguments.
            state: {
                user: {
                    herdBookName,
                    firstName,
                    lastName,
                    cattleType,
                    email,
                },
            },
        });
    };

    const form =   <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
    <fieldset>
    <Row>
        <Col>
        <FormInput
            type = "text"
            required
            title = "Herd Book Name:"
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
        <FormInput
            type = "text"
            required
            title = "First Name:"
            value = {firstName}
            onChange={(e) => setFirstName(e.target.value.trim())}
            errorMessage = "Please Provide a First Name or initial"
            />
    </Col>
    <Col>
        <FormInput
            type = "text"
            required
            title = "Last Name:"
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
        <FormInput
            type = "email"
            required
            title = "E-Mail Address:"
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
        <FormInput
            type = "password"
            required
            title = "Password:"
            value = {password}
            onChange = {(e) => setPassword(e.target.value.trim())}
            errorMessage = "Please provide a unique Password for your HerdBook"
            />
    </Col>
    <Col>
        <FormInput
            type = "password"
            required
            title = "Confirm Password:"
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

    const footer = <p>Already have an account? <Link title = "link to log-in page" to = "/account/login">Log-In here</Link></p>

    return (
    <div data-theme = {theme} className = {classes.page_container}>
        <CustomCard title = {"Sign-Up"}
                    content = {form}
                    footer = {footer} />
       
        </div>
    );
};

export default CreateHerdBook;



