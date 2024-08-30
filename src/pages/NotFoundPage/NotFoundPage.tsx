import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";
import { Row } from "react-bootstrap";
import { useState } from "react";

export default function NotFoundPage() {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (
        <div data-theme = {theme} className = {classes.page_container}>
        <div className = {classes.container + " center"}>
                <h1>404</h1>
                <h5> Page not found</h5>
            <img className = {classes.not_found_img} alt = "The Herd Book logo" src = "src/assets/grey_cow_by_VectorPortal.png"/>
            <Row>
            <Link type = "button" to = "/">Return to Dashboard</Link>
            </Row>
        </div>
        </div>
    );
   
}