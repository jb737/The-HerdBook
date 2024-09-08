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
            <div>
            <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
            <h1>Bull Files:</h1>
            <p>Bull Head Count: {(dummyAnimals.filter(p => p.sex === "bull")).length}</p>
            </div>
        <ul>   
        {myAnimals.map((animal) => (
                 <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.id}</li></Link>
            ))
            }
        </ul>
        </Container>
   ):(<Navigate to = "/account/login" />);
    
}