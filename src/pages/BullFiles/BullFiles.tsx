import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";

export default function BullFiles() {
    const { state } = useLocation();
    const [user] = useState<User>(state?.user);
    
    return user ? (
        <>
       
        </>
    ):( <Navigate to = "/account/login" />)
}