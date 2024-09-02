import { useState } from "react";
import { useLocation } from "react-router-dom";
import User from "../../models/User";
import AnimalCard from "../../components/AnimalCard/AnimalCard";


export default function BullFiles() {
    const { state } = useLocation();
    const [user] = useState<User>(state?.user);
    
    return (
        <div>
            <AnimalCard />
        </div>
    );
}