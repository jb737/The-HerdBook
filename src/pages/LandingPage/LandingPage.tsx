import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";

export default function LandingPage() {
const { state } = useLocation();
const [user] = useState<User>(state?.user);

    return user ? (
        <h3 className = "center">Landing Page is under construction.</h3>
    ):(
        <Navigate to = "/sign-up" />
    );
}