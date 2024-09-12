import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import { Alert, Container } from "react-bootstrap";
import usersService from "../../services/usersService";


export default function BullFiles() {
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

      const myBullAnimals = (myAnimals.filter((p) => p.sex === "bull"));
      
      const pageContents = 
    <Container>
      {isLoading ? (<h5>Loading...</h5>) : (
          <>
          <Container>
          <Link className = "btn btn-secondary mt-5 mb-5" to = "/:userId/animals">Add an Animal File</Link>
          <h1>Bull Files:</h1>
          <p>Bull Head Count: {myBullAnimals.length}</p>
        
      <ul>   
          {myBullAnimals.map((animal) => (
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