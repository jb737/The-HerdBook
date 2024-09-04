import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css"
import { UserContext } from "../../contexts/userContext";


export default function LandingPage() {
const {user} = useContext(UserContext);

    return user ? (
    <>
        <Row className={classes.title}>
       <h3>Welcome to your Herd Book.</h3>
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
                            <Link className = "btn btn-primary" to = "/cow_files" >Go somewhere</Link>
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
                            <Link className = "btn btn-primary" to = "/steer_files" >Go somewhere</Link>
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