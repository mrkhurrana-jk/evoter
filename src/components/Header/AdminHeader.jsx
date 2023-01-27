import React from 'react';
import { images } from '../../constants';
import './Header.css'
import { Link } from "react-router-dom";

export const AdminHeader = () => {
    return (
        <div className='app__Header'>

            <div className='app__Header-votingimg'>
                <img src={images.adminimg} alt="adminimg" />
            </div>

            <div className='app__Header-form'>
                <h1> Hi!👋 Welcome to the E-Voter </h1>
                <p className='info'>
                    E-Voter will assist you in organising elections inside your company efficiently and painlessly. It's completely free to try. This software was created by Jatin and Asutosh. All you have to do now is enter your voter id and password, and you're ready to vote.
                </p>

                <h2> Admin Login </h2>
                <form action="#" method="post" className='form-style'>
                    <input type="text" placeholder='Admin ID' />
                    <input type="password" placeholder='Password' />
                    <Link to='/controlcenter'> 
                    <button type="submit"> Login </button>
                    </Link>
                    {/* <p>
                    Don't have account? <a href="#signup">Sign Up</a> here
                </p> */}
                </form>
            </div>


        </div>
    )
};
