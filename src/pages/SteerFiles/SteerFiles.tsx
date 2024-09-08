import { useContext, useState } from "react";
import dummyAnimals from "../../components/dummyData/dummyAnimals";
import Animal from "../../models/Animal";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import classes from "./SteerFiles.module.css";

export default function SteerFiles() {
    const { user } =useContext(UserContext);
    const [myAnimals] = useState<Animal[]>(dummyAnimals.filter(p => p.sex === "steer"));
    return user ? (
        <>
         <div className = {classes.add_product_button_container}>
         <Link className = "btn btn-secondary mt-5 mb-5" to = "/my_herdbook/animals">Add an Animal File</Link>
         </div>
            <h1>Steer Files:</h1>
            <p>You have {(dummyAnimals.filter(p => p.sex === "steer")).length} Steer</p>
             <ul>
            {myAnimals.map((animal: Animal) => (
               
               <Link to = {`/animals/${animal.id}`}><li key = {animal.id}>{animal.id}</li></Link>
            ))}
            
        </ul>
        
        </>
) : (<Navigate to = "/account/login" />)}


