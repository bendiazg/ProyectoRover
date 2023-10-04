import React, { useState, useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/logo.svg'
import "./Navbar.css"
import { Collapse } from 'react-bootstrap';

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
      };
    
  return (
    <nav>
        <ul>
            <Link to="/" ><img className='logo' src={logo} alt="Rover Logo" />  </Link>
            <li>
                <NavLink to="/search">Search Sitter</NavLink>
            </li>
            <li>
                <NavLink to="/becomeSitter">Become Sitter</NavLink>
            </li>
            <li> 
                <NavLink to="/">
                    <a
                        href="/"
                        onClick={toggleMenu}
                        aria-controls="collapse-menu"
                        aria-expanded={open}
                    >
                    Mostrar Menú
                    </a>
                </NavLink>
                
                <Collapse in={open}>
                    <div id="collapse-menu">
                        <ul>
                            <li>Opción 1</li>
                            <li>Opción 2</li>
                            <li>Opción 3</li>
                        </ul>
                    </div>
                </Collapse>
                
            </li>
        </ul>
    </nav>
  )
}
