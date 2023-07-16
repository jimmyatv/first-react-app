import React from 'react';
import "./Navbar.css"
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = ({ navBarLinks }) => {
    return (
        <nav className='navbar'>
            <span className='navbar--logo'>Traveler</span>
            <ul className='navbar--list'>{navBarLinks.map(item => {
                return(
                    <li className='navbar--item'>
                        <a className='navbar--link' href={item.url}>
                            {item.title}
                        </a>
                    </li>
                )
            })}</ul>
        </nav>
    )
}



export default Navbar;