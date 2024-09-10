import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import classes from "./LoginPage.module.css";
import FormInput from "../../components/FormInput/FormInput";
import { useContext, useState } from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import { UserContext } from "../../contexts/userContext";


export default function LoginPage() {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const navigate = useNavigate();
    const userContext = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            setValidated(true);
        return;
        }

        userContext.setUser({
            
            email,
            id: 1,
            herdBookName: "",
            firstName: "",
            lastName: "",
            cattleType: "",
        })

        navigate("/");
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
                content = {form}
                footer = {footer} />
</div>
    );
}