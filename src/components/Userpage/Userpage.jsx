import React from 'react';
import { images } from '../../constants';

import './Userpage.css';

export default function Userpage() {
    // const ref = useRef();
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














// export default function Userpage() {
//     return (
//         <div className='app__userlayout'>

//             <nav className='app__userlayout-navbar'>
//                 <div className='app__userlayout-navbar_logo'>
//                     <img src={images.logo} alt="logo" />
//                 </div>
//                 <div className="app__userlayout-options">
//                     <a href='#'> Edit Profile </a>
//                     <div className='app__userlayout-navbar_divider' />
//                     <a href='#' id='logout'> Logout </a>
//                 </div>

//             </nav>

//             <div className='app__userlayout-info'>

//                 <h1>
//                     Hello Jatin! Welcome Back to evoter.
//                 </h1>

//                 <div className='app__voter-info'>
//                     <div>
//                         <p>
//                             Name : Jatin Kumar Khurana
//                         </p>
//                         <p>
//                             Age: 21 yrs
//                         </p>
//                         <p>
//                             Address : 504, Fortune Heights, Sector 35D, Kharghar, Navi Mumbai - 410210
//                         </p>
//                         <p>
//                             Mobile : +91 9588080257
//                         </p>

//                         <p>
//                             Email : jatinkumar.khurana13@nmims.edu.in
//                         </p>
//                         <p>
//                             voter id: 70472019013
//                         </p>
//                         <p>
//                             aadhar no.: 1234567890
//                         </p>

//                     </div>
                    
//                     <div>
//                         <img src={images.voter} alt="Voter profile pic" />
//                     </div>
//                 </div>

//             </div>

//             <div className='app__userlayout-cards'>

//                 <div className="card bg_card" id="myBtn">
//                     <img src={images.elections} alt="electionsimg" id='electionimg' />
//                     <div className="container">
//                         <h3><b>Elections</b></h3>
//                         <p>Enter the election code and voter id number and select your preferred candidate.</p>
//                     </div>
//                 </div>


//                 <div className="card bg_card2" id="myBtn1">
//                     <img src={images.results} alt="electionsimg" id='resultsimg' />
//                     <div className="container">
//                         <h3><b>Results</b></h3>
//                         <p>You can check the election results here. Simply type in the election code.</p>
//                     </div>
//                 </div>


//                 <div className="card bg_card" id="myBtn2">
//                     <img src={images.candidate} alt="electionsimg" id='candidateimg' />
//                     <div className="container">
//                         <h3><b>Apply for Candidature</b></h3>
//                         <p>To run for office, go here and fill out an application.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
