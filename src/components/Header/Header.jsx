import React from 'react';
import { images } from '../../constants';
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='app__Header'>

            <div className='app__Header-form'>
                <h1> Hi!👋 Welcome to the E-Voter </h1>
                <p className='info'>
                    E-Voter will assist you in organising elections inside your company efficiently and painlessly. It's completely free to try. This software was created by Asutosh, Jatin, Sakshi & Esha. All you have to do now is enter your voter id and password, and you're ready to vote.
                </p>

                {/* <h2> Login </h2> */}
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
                <img src={images.voting} alt="votingimg" />
            </div>
        </div>
    )
};
