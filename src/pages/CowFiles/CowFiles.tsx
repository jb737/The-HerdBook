import { useContext, useState } from "react";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { Link, Navigate } from "react-router-dom";

export default function CowFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals] = useState<Animal[]>(dummyAnimals.filter(p => p.sex === "cow"));
    return user?(
        <div>
            <h1>Cow Files:</h1>
            <div>
        <ul>
        {myAnimals.map((animal: Animal) => (
                 <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.id}</li></Link>
            ))}
        </ul>
       </div>
        </div> 
    ):(<Navigate to = "/account/login" />)
}