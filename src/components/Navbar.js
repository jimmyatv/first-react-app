import { React, useState } from 'react';
import "./Navbar.css"
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = ({navBarLinks}) => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClicked = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <nav className='navbar'>
            <span className='navbar--logo'>Traveler</span>

            {menuClicked ? (
                <FiX size={25} className='navbar--menu' onClick={toggleMenuClicked} />
            ) : (
                <FiMenu size={25} className='navbar--menu' onClick={toggleMenuClicked} />
            )}
            <ul className={menuClicked ? 'navbar--list-active' : 'navbar--list'}>
                {navBarLinks.map((nav, idx) => {
                    return (
                        <li key={idx} className='navbar--nav'>
                            <a className='navbar--link' target='_blank' href={nav.url}>{nav.title}</a>
                        </li>
                    )
                })}</ul>
        </nav>
    )
}



export default Navbar;