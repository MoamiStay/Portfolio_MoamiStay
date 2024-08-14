import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Websites from "./Websites.jsx";
import UxPage from "./Ux.jsx";
import Logos from "./Logos.jsx";
import {MenuItems} from "./styles";


const Cards = () => {
    const [ menuChoice, setMenuChoice ] = useState(Websites);

return (
    <>
    <MenuItems>
        <p>Websites</p>
        <p>UX</p>
        <p>Logos</p>
    </MenuItems>
    
    <section>
        {menuChoice}
    </section>
    </>
)};

export default Cards;