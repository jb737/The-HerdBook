import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";
import classes from "./LandingPage.module.css";

//TODO: 1:33 video 14. Build the layout

export default function LandingPage() {
const { state } = useLocation();//how to access the state from useNavigate
const [user] = useState<User>(state?.user);

    return user ? (
    <div className = {classes.page_container}>
       <div>Hello {user.email.split("@")[0]}</div>
    </div>
    ):(
        <Navigate to = "/sign-up" />
    );
}