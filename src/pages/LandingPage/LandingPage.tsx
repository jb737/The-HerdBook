import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";


export default function LandingPage() {
const { state } = useLocation();//how to access the state from useNavigate
const [user] = useState<User>(state?.user);//user gets all the properties of state.user

    return user ? (
       <p>Hello {user.email.split("@")[0]}</p>
    ):(
        <Navigate to = "/account/sign-up" />
    );
}