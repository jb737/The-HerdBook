import { useState } from "react";
import classes from "./Layout.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";


export default function Layout () {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (
        <div data-theme = {theme} className = {classes.page_container}>
        <div className = {classes.navigation_container}>
    <Navbar expand="lg" className={classes.navbar }>
        <Container>
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
                    <NavLink to={"/shop"}><HiOutlineShoppingCart />Shop</NavLink>
                    <NavLink to = {"/messages"}><FiMessageSquare />Messages</NavLink>
                </Nav>

                <Nav>
            <NavLink to = "/settings"><IoSettingsOutline />Settings</NavLink>
            <NavLink  to="/account/login"><CgLogOut />Log-Out</NavLink>
          </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
        <Container>
            <Outlet />
        </Container>
        </div>
    );
}