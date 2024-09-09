import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css"
import { UserContext } from "../../contexts/userContext";
//import dummyAnimals from "../../components/dummyData/dummyAnimals";
import Animal from "../../models/Animal";
import { IoSearch } from "react-icons/io5";
import usersService from "../../services/usersService";


export default function LandingPage() {
const {user} = useContext(UserContext);
const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

useEffect(() => {
  const getUsersAnimals = async() => {
    const animals = await usersService.getUserAnimals(1);
    setMyAnimals(animals);
  };
  getUsersAnimals();
},[]);

    return user ? (
    <>
        <Row className={classes.title}>
       <h1 className = " mt-5">Welcome to your Herd Book.</h1>
       </Row>
       <Row>
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
       {myAnimals.length > 0 ? (
         <div>
            <p>You have {myAnimals.length} animals in your herd.</p>
         <ul>
             {myAnimals.map((animal) => (
                 <li key = {animal.id}>{animal.name}</li>
             ))}
         </ul>
        </div>
       ) : (
        <Row>
        <p>No Animals Found</p>
        </Row>
       )}
    </>
    ):(
        <Navigate to = "/account/login" />
    );
}

