import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import CreateHerdBook from "../pages/CreateHerdBook/CreateHerdBook";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const routes = createRoutesFromElements (
    <>
    <Route path = "/sign-up" element = {<CreateHerdBook />} />
    <Route path = "/login" element = {<LoginPage />} />
    <Route path = "/" element = {<div><LandingPage /></div>} />
    <Route path = "*" element = {<NotFoundPage />} />
    </>
    );

   const router = createBrowserRouter(routes);

   export default router;

