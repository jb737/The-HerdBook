import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css"
import { UserContext } from "../../contexts/userContext";
//import dummyAnimals from "../../components/dummyData/dummyAnimals";
import Animal from "../../models/Animal";
import { IoSearch } from "react-icons/io5";
import usersService from "../../services/usersService";


export default function LandingPage() {
const { user } = useContext(UserContext);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [hasError, setHasError] = useState<boolean>(false);
const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

useEffect(() => {
  const getUsersAnimals = async() => {

    try {
      const animals = await usersService.getUserAnimals(user!.id);
        setMyAnimals(animals);
        setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }

    
  };
  getUsersAnimals();
},[user]);

const pageContents =    <div>  <Row>
<Col>
    <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
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
<ul>
   {myAnimals.map((animal) => (
       <li key = {animal.id}>{animal.name}</li>
   ))}
</ul>
</div>
)}
</Container>
</div>

    return user ? (
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

