import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import CreateHerdBook from "../pages/CreateHerdBook/CreateHerdBook";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "../components/Layout/Layout";
import BullFiles from "../pages/BullFiles/BullFiles";
import CowFiles from "../pages/CowFiles/CowFiles";
import SteerFiles from "../pages/SteerFiles/SteerFiles";
import AnimalFormPage from "../pages/AnimalFormPage/AnimalFormPage";
import AnimalFile from "../pages/AnimalFile/AnimalFile";

const routes = createRoutesFromElements (
    <>
    <Route path = "/" element = {<Layout />}>
        <Route index element = {<LandingPage />} />
        <Route path = "cow_files" element = {<CowFiles />} />
        <Route path = "steer_files" element = {<SteerFiles />} />
        <Route path = "bull_files" element = {<BullFiles />} />
        <Route path = "/animals/:animalId" element = {<AnimalFile />} />
        <Route path =  "/my_herdbook/animals" element = {<AnimalFormPage />} />
    </Route>

    <Route path = "/account">
        <Route path = "sign-up" element = {<CreateHerdBook />} />
        <Route path = "login" element = {<LoginPage />} />
    </Route>

        <Route path = "*" element = {<NotFoundPage />} />
    </>
    );

   const router = createBrowserRouter(routes)

   export default router;

