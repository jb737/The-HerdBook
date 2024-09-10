import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import { Alert, Container } from "react-bootstrap";
import usersService from "../../services/usersService";


export default function BullFiles() {
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

      const myBullAnimals = (myAnimals.filter((p) => p.sex === "bull"));
      
      const pageContents = 
    <Container>
      {isLoading ? (<h5>Loading...</h5>) : (
          <>
          <Container>
          <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
          <h1>Bull Files:</h1>
          <p>Bull Head Count: {myBullAnimals.length}</p>
        
      <ul>   
          {myBullAnimals.map((animal) => (
             <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.name}</li></Link>
          ))
         }
      </ul>
    </Container>
        </>
  )
}
    </Container>
    
    return user ? (
      <div>
      {hasError ? <Alert variant = "danger">Something went wrong. Please try again</Alert> : pageContents}
      </div>
   ):(<Navigate to = "/account/login" />);
    
}