import React from 'react'
import { images } from '../../constants'
import { Navbar } from '../Navbar/Navbar'
import { useRef } from "react";
import './Register.css'
export default function Register() {
    const ref = useRef();
    return (
        <div className='app__registration'>

            <Navbar/>
            <h1>
                Registration Page
            </h1>

            <div className='app__registration_container'>

                <div className='app__registration_img'>
                    <img src={images.register} alt="register-img" />
                </div>

                <div className='app__registration_form'>
                    <div>
                        <h2>
                            To be a part of E-Voter: Register here
                        </h2>
                            {/* <p>Register Here</p> */}
                        <p>
                        Fill up the blanks with the needed information. Your information will be sent to the administrator for verification once you complete the form. Your voter id will be unique, and your password will be the same as the one you submitted.
                        </p>
                    </div>
                    <form action="">

                        <input type="text" placeholder='Name' />
                        {/* <input type="text" placeholder='Voter ID' /> */}
                        <input type="datetime" onFocus={() => (ref.current.type = "date")}/>
                        <input type="text" placeholder='Address' />
                        <input type="text" placeholder='Mobile' />
                        <input type="email" placeholder='Email Id' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>

        </div>
    )
}
