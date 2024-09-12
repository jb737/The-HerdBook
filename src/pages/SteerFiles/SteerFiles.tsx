import { useContext, useEffect, useState } from "react";
import Animal from "../../models/Animal";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import classes from "./SteerFiles.module.css";
import usersService from "../../services/usersService";
import { Alert, Container } from "react-bootstrap";

export default function SteerFiles() {
    const { userId } =useContext(UserContext);
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

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
    },[userId]);

    const mySteerAnimals = (myAnimals.filter((p) => p.sex == "steer"));
    const pageContents =    <Container>
      {isLoading ?  (<h5>Loading...</h5>) : (
<div>
<div className = {classes.add_product_button_container}>
<Link className = "btn btn-secondary mt-5 mb-5" to = "/:userId/animals">Add an Animal File</Link>
</div>
   <h1>Steer Files: </h1>
   <p>Steer Head Count: {mySteerAnimals.length}</p>
   <ul>
   {mySteerAnimals.map((animal: Animal) => (
      
      <Link to = {`/:userId/animals/${animal._id}`}><li key = {animal._id}>{animal.name}</li></Link>
   ))}
   
</ul>
</div>
      )}
   
   
   </Container>

    return userId ? (
      <div>
      {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
) : (<Navigate to = "/account/login" />)}


