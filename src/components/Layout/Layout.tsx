import { useState } from "react";
import classes from "./Layout.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";

interface LayoutProps  {
    children: React.ReactNode;
}

export default function Layout ({children}: LayoutProps) {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (
        <div data-theme = {theme} className = {classes.page_container}>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        {children}
        </div>
    );
}