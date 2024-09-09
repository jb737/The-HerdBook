import { useContext, useEffect, useState } from "react";
import Animal from "../../models/Animal";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import classes from "./SteerFiles.module.css";
import usersService from "../../services/usersService";

export default function SteerFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals, setMyAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const getUsersAnimals = async () => {
          const animals = await usersService.getUserAnimals(1);
          setMyAnimals(animals);
        };
      
        getUsersAnimals();
      },[]);

      const mySteerAnimals = (myAnimals.filter((p) => p.sex === "steer"));


    return user ? (
        <>
         <div className = {classes.add_product_button_container}>
         <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
         </div>
            <h1>Steer Files: </h1>
            <p>Steer Head Count: {mySteerAnimals.length}</p>
            <ul>
            {mySteerAnimals.map((animal: Animal) => (
               
               <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.name}</li></Link>
            ))}
            
        </ul>
        
        </>
) : (<Navigate to = "/account/login" />)}


