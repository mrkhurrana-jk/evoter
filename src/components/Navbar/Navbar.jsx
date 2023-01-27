import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { images } from '../../constants';
import './Navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [ToggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className='app__Navbar'>

            <div className='app__Navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>


            <ul className='app__Navbar-links'>
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="/About"> About </Link> </li>
                <li> <Link to="/faqs"> FAQs </Link>  </li>
            </ul>

            <div className='app__Navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />
                {
                    ToggleMenu && (
                        <div className='app__Navbar-smallscreen-overlay'>
                            <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />
                            <ul className="app__Navbar-smallscreen-links">
                                <li> <a href="#home"> Home </a> </li>
                                <li> <a href="#about"> About </a> </li>
                                <li> <a href="#faqs"> FAQs </a>  </li>
                            </ul>
                        </div>)
                }

            </div>

        </nav>

    )
};
