import { useContext, useEffect, useState } from "react";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { Link, Navigate } from "react-router-dom";
import usersService from "../../services/usersService";
import { Alert, Container } from "react-bootstrap";

export default function CowFiles() {
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

      const myCowAnimals = (myAnimals.filter((p) => p.sex === "cow"));
      
      const pageContents = 
    <Container>
      {isLoading ? (<h5>Loading...</h5>) : (
          <>
          <Container>
          <Link className = "btn btn-secondary mt-5 mb-5" to = "/:userId/animals">Add an Animal File</Link>
          <h1>Cow Files:</h1>
          <p>Cow Head Count: {myCowAnimals.length}</p>
        
      <ul>   
          {myCowAnimals.map((animal) => (
             <Link to = {`/:userId/animals/${animal._id}`}><li key = {animal._id}>{animal.name}</li></Link>
          ))
         }
      </ul>
    </Container>
        </>
  )
}
    </Container>
    
    return userId ? (
      <div>
      {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
   ):(<Navigate to = "/account/login" />);
    
}