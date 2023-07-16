import {React, useState} from 'react';
import "./Navbar.css"
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = ({ navBarLinks }) => {
    

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClicked = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <nav className='navbar'>
            <span className='navbar--logo'>Traveler</span>

            {menuClicked ? <FiMenu size={25} className='navbar--menu' onClick={toggleMenuClicked}/> : <FiX size={25} className='navbar--menu' onClick={toggleMenuClicked}/>}
            <ul className={menuClicked ? 'navbar--list' : 'navbar--list navbar--list-active'}>{navBarLinks.map(item => {
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