import React from 'react';
import { images } from '../constants';
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import Content from "../createelec";
import Content1 from "../Modal";
import Content2 from "../Verify";

import './Userpage/Userpage.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


export default function Voterpage() {
    const [ToggleMenu, setToggleMenu] = React.useState(false);
    return (
        <div className='app__userlayout'>

            <nav className='app__userlayout-navbar'>
                <div className='app__userlayout-navbar_logo'>
                    <img src={images.logo} alt="logo" />
                    <h1>E-MatDaan</h1>
                </div>
                <div className="app__userlayout-options">
                    <Link to="#" > Edit Profile </Link>
                    <div className='app__userlayout-navbar_divider' />
                    <Link to="/" id='logout'> Logout </Link>
                </div>

                <div className='app__Navbar-smallscreen'>
                <GiHamburgerMenu color='#373532' fontSize={27} onClick={() => { setToggleMenu(true) }} />
                {
                    ToggleMenu && (
                        <div className='app__Navbar-smallscreen-overlay'>
                            <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />
                            <ul className="app__Navbar-smallscreen-links">
                                <li> <Link to="#"> Edit Profile </Link> </li>
                                <li> <Link to="/"> Logout </Link> </li>
                            </ul>
                        </div>)
                }

            </div>

            </nav>

            <div className='app__userlayout-info'>

                <h1>
                    Hello Jatin! Welcome Back to evoter.
                </h1>

                <div className='app__voter-info info'>
                    <div>
                        <p>
                            Name : Jatin Kumar Khurana
                        </p>
                        <p>
                            Age: 21 yrs
                        </p>
                        <p>
                            Address : 504, Fortune Heights, Sector 35D, Kharghar, Navi Mumbai - 410210
                        </p>
                        <p>
                            Mobile : +91 9588080257
                        </p>

                        <p>
                            Email : jatinkumar.khurana13@nmims.edu.in
                        </p>
                        <p>
                            voter id: 70472019013
                        </p>
                        <p>
                            aadhar no.: 1234567890
                        </p>

                    </div>

                    <div>
                        <img src={images.voter} alt="Voter profile pic" />
                    </div>
                </div>

            </div>


            <div className='app__userlayout-cards'>

                <div className="Modal card bg_card">
                    <Popup modal trigger={<div id="myBtn">
                        <img src={images.elections} alt="electionsimg" id='electionimg' />
                        <div className="container">
                            <h3><b>Elections</b></h3>
                            <p>Enter the election code and voter id number and select your preferred candidate.</p>
                        </div>
                    </div>}>
                        {close => <Content close={close} />}
                    </Popup>
                </div>
                <div className="Modal card bg_card2">
                    <Popup modal trigger={

                        <div id="myBtn1">
                            <img src={images.results} alt="electionsimg" id='resultsimg' />
                            <div className="container">
                                <h3><b>Results</b></h3>
                                <p>You can check the election results here. Simply type in the election code.</p>
                            </div>
                        </div>

                    }>
                        {close => <Content1 close={close} />}
                    </Popup>
                </div>
                <div className="Modal card bg_card">
                    <Popup modal trigger={
                            <div id="myBtn2">
                            <img src={images.candidate} alt="electionsimg" id='candidateimg' />
                            <div className="container">
                                <h3><b>Apply for Candidature</b></h3>
                                <p>To run for office, go here and fill out an application.</p>
                            </div>
                        </div>
                    }>
                        {close => <Content2 close={close} />}
                    </Popup>
                </div>







            
            </div>
        </div>
    );
}
