import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import Animal from "../../models/Animal";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import { Container } from "react-bootstrap";


export default function BullFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals] = useState<Animal[]>(dummyAnimals.filter(p => p.sex === "bull"));
    
    return user ? (
        <Container>
            <h1>Bull Files:</h1>
        <ul>   
        {myAnimals.map((animal) => (
                 <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.id}</li></Link>
            ))
            }
        </ul>
        </Container>
   ):(<Navigate to = "/account/login" />);
    
}