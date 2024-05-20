import React from "react";
import { Routes , Route} from "react-router-dom";
import "./App.css";
import "./project.css";
import Home from "./Components/home";
import About from "./Components/About";
import Header from "./Components/header";
import Counter from "./Components/counter";
import Error from "./Components/404";

function App() {
   

    return (
        <>
        <Routes>

        <Route path="" element = {<Header />} />      
        <Route path="/Home" element = { <><Header /><Home /></>} />   
        <Route path="/about" element = {<About />} />   
        <Route path="/counter" element = {<Counter />} />   
        <Route path="*" element={<Error />} />
        
        </Routes>
        </>
    );
}

export default App;
