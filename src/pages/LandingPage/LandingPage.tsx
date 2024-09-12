import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css"
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import { IoSearch } from "react-icons/io5";
import usersService from "../../services/usersService";


export default function LandingPage() {
const { userId } = useContext(UserContext);
const { animalId } = useParams();
const [isLoading, setIsLoading] = useState<boolean>(true);
const [hasError, setHasError] = useState<boolean>(false);
const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

useEffect(() => {
  const getUsersAnimals = async () => {

    try {
      const animals = await usersService.getUserAnimals(userId!);
        setMyAnimals(animals);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  getUsersAnimals();
},[userId, animalId]);

const pageContents =    <div>  <Row>
<Col>
    <Link className = "btn btn-secondary mt-5 mb-5" to = "/:userId/animals">Add an Animal File</Link>
</Col>
<Col>
<InputGroup className="mt-5 mb-3">
<Form.Control
  placeholder="Search"
  aria-label="Search"
  aria-describedby="Search Animals"
/>
<Button variant="outline-secondary" >
<IoSearch />
</Button>
</InputGroup>
</Col>
</Row>
<Container>
{isLoading ? (
  <h5>Loading...</h5>
) : (
  <div>
  <p>Total head count: {myAnimals.length}</p>
  <ul className={classes.list}>
   {myAnimals.map((animal) => (
     <div> <Link to = {`/:userId/animals/${animal._id}`}>{animal.name}</Link><li className={classes.li_item} key = {animal._id}>
      </li>
    </div> 
   ))}
   
</ul>
</div>
)}
</Container>
</div>

    return userId ? (
    <>
        <Row className={classes.title}>
       <h1 className = " mt-5">Welcome to your Herd Book.</h1>
       </Row>
       {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
  
    </>
    ):(
        <Navigate to = "/account/login" />
    );
}

