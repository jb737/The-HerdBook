import { useContext, useEffect, useState } from "react";
import Animal from "../../models/Animal";
import { UserContext } from "../../contexts/userContext";
import { Link, Navigate } from "react-router-dom";
import usersService from "../../services/usersService";

export default function CowFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const getUsersAnimals = async () => {
          const animals = await usersService.getUserAnimals(1);
          setMyAnimals(animals);
        };
      
        getUsersAnimals();
      },[]);

      const myCowAnimals = (myAnimals.filter((p) => p.sex === "cow"));

    return user?(
            <div >
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
        </div> 
    ):(<Navigate to = "/account/login" />)
}