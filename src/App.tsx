import { useState } from 'react';
import './App.css';
import CreateHerdBook from './pages/CreateHerdBook/CreateHerdBook';
import classes from "./App.module.css";



const App = () => {
 const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "");

  return (
    <div className = {classes.container} data-theme = {theme}>
      <button onClick = {() => 
        setTheme((currentTheme) => (currentTheme === "dark") ? "" : "dark")}>Change Color Mode</button>
      <CreateHerdBook />
    </div>
  );
};

export default App
