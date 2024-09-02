import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";
import { Card, Col, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css"


export default function LandingPage() {
const { state } = useLocation();//how to access the state from useNavigate
const [user] = useState<User>(state?.user);//user gets all the properties of state.user

    return user ? (
    <>
        <Row className={classes.title}>
       <h3>Hello {user.firstName ?? ""}</h3>
       </Row>
       <Row>
        <p>Welcome to your Herd Book.</p>
       </Row>
       <Row>
        <Col md = {12}>
            <Card className = {classes.folder_card }>
                <Card.Img className = {classes.folder_img} variant="top" src="src/assets/vecteezy_cattle-icon-vector-illustration-silhouette-cow-icon-for_24765599.svg" />
                    <Card.Body>
                        <Card.Title>Cows</Card.Title>
                            <Card.Text>
                               Cow / Heifer Files
                            </Card.Text>
                            <Link className = "btn btn-primary" to = "/bull_files" >Go somewhere</Link>
                    </Card.Body>
            </Card>
        </Col>
        <Col md = {12}>
        <Card className = {classes.folder_card }>
                <Card.Img className = {classes.folder_img} variant="top" src="src/assets/vecteezy_cattle-icon-vector-illustration-silhouette-cow-icon-for_24765599.svg" />
                    <Card.Body>
                        <Card.Title>Steers</Card.Title>
                            <Card.Text>
                               Steer Files
                            </Card.Text>
                            <Link className = "btn btn-primary" to = "/bull_files" >Go somewhere</Link>
                    </Card.Body>
            </Card>
        </Col>
        <Col md = {12}>
        <Card className = {classes.folder_card }>
                <Card.Img alt = "bull" className = {classes.folder_img} variant="top" src="src/assets/vecteezy_logo-bull-silhouette-of-bull-silhouette-of-buffalo-retro_4646394 (1).svg" />
                    <Card.Body>
                        <Card.Title>Bulls</Card.Title>
                            <Card.Text>
                               Bull Files
                            </Card.Text>
                            <Link className = "btn btn-primary" to = "/bull_files" >Go to Bull Files</Link>
                    </Card.Body>
            </Card>
        </Col>
        </Row>
       <Row>

       </Row>
    </>
    ):(
        <Navigate to = "/account/login" />
    );
}