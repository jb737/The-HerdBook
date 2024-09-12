import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import classes from "./LoginPage.module.css";
import FormInput from "../../components/FormInput/FormInput";
import { useContext, useState } from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { UserContext } from "../../contexts/userContext";
import usersService from "../../services/usersService";
import { Axios, AxiosError } from "axios";
import ErrorMessageAlert from "../../components/ErrorMessageAlert/ErrorMessageAlert";


export default function LoginPage() {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const { setUserId } = useContext(UserContext);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            setValidated(true);
        return;
        }

        try {
            setIsLoading(true);
            const userId = await usersService.login(email, password);

            setUserId(userId);
    
            navigate("/");
        } catch (error) {
            const err = error as AxiosError;
            setErrorMessage(err.response?.data as string);
        } finally {
            setIsLoading(false);
        }
    };

    const form =  <Form noValidate validated = {validated} onSubmit = {onSubmitHandler}>
    <FormInput
    title = "E-Mail"
    type = "email"
    onChange = {e => setEmail(e.target.value)}
    value = {email}
    />
    <FormInput 
    title = "Password"
    type = "password"
    onChange = {e => setPassword(e.target.value)}
    value = {password}
    />
    <div className={classes.submit_btn_container}>
    <Button className = {classes.submit_btn} variant = "primary" type = "submit" disabled = {!email || !password}>Log-In</Button>
    </div>
</Form>

    const footer =   <p>Don't have an account? <Link to = "/account/sign-up">Sign Up here</Link></p>

    return (
<div data-theme = {theme} className = {classes.page_container}>
    <CustomCard title = "Log-In"
                content ={isLoading ? <h3>"Loading..."</h3> : form} 
                footer = {isLoading ? <></> :  footer} />
    {errorMessage && <ErrorMessageAlert message = {errorMessage} />}
</div>
    );
}