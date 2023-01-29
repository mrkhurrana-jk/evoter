import React from 'react';
import { images } from '../../constants';
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='app__Header'>

            <div className='app__Header-form'>
                <div>

                    <h3> Instructions for Voters: </h3>
                    <p className='info'>
                        1. Please give your respectfull vote as per Election Commission of India guideline. <br />
                        2. Voter Id will be directly verified with government documents. <br />
                        3. Vote can be given to only one candidate, and after submission the selection cannot be changed. <br />
                        4. Password Or OTP will be only sent to registered mobile number. <br />
                        5. Please vote if your age is 18 years and above as per rules. <br />
                    </p>
                </div>

                <h2> Voter login </h2>
                <form action="#" method="post" className='form-style'>
                    <input type="text" placeholder='Voter ID' />
                    <input type="password" placeholder='Password' />
                    <p>

                        <Link to="/voter"> <button>  Login </button> </Link>
                    </p>
                    <p>
                        Don't have account? <Link to="/register">Sign Up</Link> here
                    </p>
                </form>
            </div>

            <div className='app__Header-votingimg'>
                <img src={images.VoteIndia} alt="votingimg" />
                <div>

                    <h1> Welcome to the E-MatDaan </h1>
                    <p className='info'>
                        E-Voter will assist you in organising elections inside your company efficiently and painlessly. It's completely free to try. This software was created by Asutosh, Jatin, Sakshi & Esha. All you have to do now is enter your voter id and password, and you're ready to vote.
                    </p>
                </div>

            </div>
        </div>
    )
};
