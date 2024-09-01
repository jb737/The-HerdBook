import { useState } from "react";
import CustomCard from "../../components/CustomCard/CustomCard";
import classes from "./ShopPage.module.css"

export default function ShopPage() {
    const [theme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    return (
        <div data-theme = {theme} className = {classes.page_container}>
        <CustomCard title = "Shopping Page is under Construction"
                    content = {<p className={classes.p}>sorry for any inconvenience</p>} />

    </div>
    );
}