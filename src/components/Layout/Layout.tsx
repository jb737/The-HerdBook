import { useContext, useState } from "react";
import classes from "./Layout.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { UserContext } from "../../contexts/userContext";


export default function Layout () {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const navigate = useNavigate();
    const { setUser} = useContext(UserContext);
    const onLogoutClickHandler = () => {
        setUser(undefined);
        navigate("/account/login");
    }
    return (
        <div data-theme = {theme} className = {classes.page_container}>
        <div className = {classes.navigation_container}>
    <Navbar expand="lg" className={classes.navbar }>
        
            <Link to = "/">
                <img
                    alt="The Herd Book Logo"
                    src="src/assets/grey_cow_by_VectorPortal.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    title = "Return to Dashboard"
                    />
            </Link>
                
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to={"/bull_files"}><FiMessageSquare />Bull Files</NavLink>
                    <NavLink to = {"/cow_files"}><FiMessageSquare />Cow Files</NavLink>
                    <NavLink to = {"/steer_files"}><FiMessageSquare />Steer Files</NavLink>
                </Nav>

                <Nav>
            <NavLink to = "/settings"><IoSettingsOutline />Settings</NavLink>
            <button onClick = {onLogoutClickHandler}><CgLogOut />Log-Out</button>
          </Nav>
            </Navbar.Collapse>
       
    </Navbar>
    </div>
        <Container>
            <Outlet />
        </Container>
        </div>
    );
}