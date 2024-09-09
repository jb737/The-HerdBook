import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import { Container } from "react-bootstrap";
import usersService from "../../services/usersService";


export default function BullFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const getUsersAnimals = async () => {
          const animals = await usersService.getUserAnimals(1);
          setMyAnimals(animals);
        };
      
        getUsersAnimals();
      },[]);

      const myBullAnimals = (myAnimals.filter((p) => p.sex === "bull"));
    
    return user ? (
        <Container>
            <div>
            <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
            <h1>Bull Files:</h1>
            <p>Bull Head Count: {myBullAnimals.length}</p>
            </div>
        <ul>   
        {myBullAnimals.map((animal) => (
                 <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.name}</li></Link>
            ))
            }
        </ul>
        </Container>
   ):(<Navigate to = "/account/login" />);
    
}