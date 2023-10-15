import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/images/logo.svg'
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
        <ul className='section1'>
            
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
                    <Collapse className='menuCollapse' in={open}>
                    <ul className='menuContainer' id="collapse-menu">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum aspernatur modi recusandae, ipsam suscipit rerum. Porro esse fugiat aliquam voluptate suscipit? Voluptatem debitis quo ipsum repudiandae, corporis minus dignissimos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur porro voluptate quo dolorum numquam neque ad deserunt voluptas ullam, qui eaque ratione fugiat reprehenderit rerum. Recusandae fugiat quia itaque?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia repellat soluta, quaerat distinctio quia dolore temporibus magnam beatae dolor quis! Nihil in fugiat quis omnis accusamus eum minus debitis non?

                        </li>
                    </ul>
                    </Collapse>
                </NavLink>
                       
            </li>

        </ul>
        <ul className='section2'>
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
