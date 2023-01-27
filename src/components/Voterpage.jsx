import React from 'react';
import { images } from '../constants';
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import Content from "../createelec";
import './Userpage/Userpage.css';


export default function Voterpage() {
    return (
        <div className='app__userlayout'>

            <nav className='app__userlayout-navbar'>
                <div className='app__userlayout-navbar_logo'>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className="app__userlayout-options">
                    <a href='#'> Edit Profile </a>
                    <div className='app__userlayout-navbar_divider' />
                    <a href='#' id='logout'> Logout </a>
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
                        {close => <Content close={close} />}
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
                        {close => <Content close={close} />}
                    </Popup>
                </div>







            
            </div>
        </div>
    );
}
