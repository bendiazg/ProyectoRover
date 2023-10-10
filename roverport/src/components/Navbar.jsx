import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/logo.svg'
import "./Navbar.css"
import { Collapse } from 'react-bootstrap';

export const Navbar = () => {

    const [open, setOpen] = useState(false);


    const toggleMenu = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    
  return (
    <nav>
        <ul>
            <Link to="/" className='logo' ><img onClick={closeMenu} src={logo} alt="Rover Logo" />  </Link>
            <li>
                <NavLink to="/search" onClick={closeMenu}>Search Sitter</NavLink>
            </li>
            <li>
                <NavLink to="/becomeSitter" onClick={closeMenu}>Become Sitter</NavLink>
            </li>
            <li> 
                <NavLink to="/">
                    <a
                        className='menuButton'
                        href="/"
                        onClick={toggleMenu}
                        aria-controls="collapse-menu"
                        aria-expanded={open}
                    >
                    Mostrar Menú
                    </a>
                </NavLink>
                
                <Collapse in={open}>
                    <div className='menuCollapse' id="collapse-menu">
                        <ul>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil animi, eius, at natus dolore ex debitis itaque officia molestiae quis voluptatibus expedita corporis odit esse, optio nesciunt quia perferendis.
                        </ul>
                    </div>
                </Collapse>
                
            </li>
        </ul>
        <ul className='sign'>
            <li>
                <NavLink>Sign Up</NavLink>
            </li>
            <li>
                <NavLink>Sign In</NavLink>
            </li>
            <li>
                <NavLink>Help</NavLink>
            </li>
        </ul>
    </nav>
  )
}
