import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar =()=>{
    return (
        <nav>
            <ul>
            <li><NavLink to="/" >Start</NavLink></li>
<li><NavLink to="/rest">REST-Api</NavLink></li>
<li><NavLink to="/hooks">Hooks</NavLink></li>

    </ul></nav>);
};

export default NavBar;