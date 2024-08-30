import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import User from "../../models/User";
import Layout from "../../components/Layout/Layout";

//TODO: 1:33 video 14. Build the layout

export default function LandingPage() {
const { state } = useLocation();//how to access the state from useNavigate
const [user] = useState<User>(state?.user);//user gets all the properties of state.user

    return user ? (
    <Layout>
       <p>Hello {user.email.split("@")[0]}</p>
    </Layout>
    ):(
        <Navigate to = "/sign-up" />
    );
}