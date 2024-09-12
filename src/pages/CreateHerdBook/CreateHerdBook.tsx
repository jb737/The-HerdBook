import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import classes from "./CreateHerdBook.module.css";
import FormInput from "../../components/FormInput/FormInput";
import CustomCard from "../../components/CustomCard/CustomCard";
import usersService from "../../services/usersService";
import { UserContext } from "../../contexts/userContext";

const CreateHerdBook = (): JSX.Element => {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const { setUserId } = useContext(UserContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);



    const [herdBookName, setHerdBookName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        e.preventDefault();
        e.stopPropagation();

        // setValidated(true);
        // if (form.checkValidity() === false) {
        //     alert("Please fill all required fields");
        //     return;
        // }
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
          }

        try {
            const newUserId = await usersService.signup({ id: "", herdBookName, firstName, lastName, email, password, confirmPassword})
            setUserId(newUserId);
            navigate("/");
        } catch (error) {
            setHasError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const form = 

        <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
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
            !email
            } 
        className = {classes.submit_btn} 
        type = "submit">Create Herd Book</Button>
        </div>
    </Form>

    const footer = <p>Already have an account? <Link title = "link to log-in page" to = "/account/login">Log-In here</Link></p>
    

    const pageContents = isLoading ? (<h5>Loading...</h5>) : (
        (
            <div data-theme = {theme} className = {classes.page_container}>
                <CustomCard title = {"Sign-Up"}
                            content = {form}
                            footer = {footer} />
               
                </div>
            )
    )
        
    return  <div>
    {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
    </div>
};

export default CreateHerdBook;



