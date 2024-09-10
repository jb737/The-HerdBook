import { useContext, useEffect, useState } from "react";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { Link, Navigate } from "react-router-dom";
import usersService from "../../services/usersService";
import { Alert, Container } from "react-bootstrap";

export default function CowFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
      const getUsersAnimals = async () => {
        try {
          const animals = await usersService.getUserAnimals(1);
          setMyAnimals(animals);
          setIsLoading(false);
        } catch (error) {
          setHasError(true);
        }
       
      };
    
      getUsersAnimals();
    },[]);

      const myCowAnimals = (myAnimals.filter((p) => p.sex === "cow"));

      const pageContents =    <Container >
      <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
      <h1>Cow Files:</h1>
      <p>Cow Head Count: {myCowAnimals.length}</p>
      <div>

  <ul>
  {myCowAnimals.map((animal: Animal) => (
           <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.name}</li></Link>
      ))}
  </ul>
 </div>
  </Container> 

    return user?(
      <div>
      {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
    ):(<Navigate to = "/account/login" />)
}