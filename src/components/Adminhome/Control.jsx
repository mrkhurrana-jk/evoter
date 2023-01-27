import React from 'react';
import { images } from '../../constants';
import '../Adminhome/Control.css'
import Popup from "reactjs-popup";


export default function Control() {
    return (
        <div className='app__userlayout'>

            <nav className='app__userlayout-navbar'>
                <div className='app__userlayout-navbar_logo'>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className="app__userlayout-options">
                    {/* <a href='#'> Edit Profile </a>
                    <div className='app__userlayout-navbar_divider' /> */}
                    <a href='#' id='logout'> Logout </a>
                </div>

            </nav>

            <div className='app__adminlayout-info'>
                <h1>
                    Hello Admin! <br /> Welcome Back to evoter's Control center.
                </h1>

                <div className='app__admin-info'>
                    <div>
                        <p>
                            Name : Jatin Kumar Khurana
                        </p>

                        <p>
                            Mobile : +91 9588080257
                        </p>

                        <p>
                            Email : jatinkumar.khurana13@nmims.edu.in
                        </p>
                        <p>
                            Admin id: 70472019013
                        </p>

                    </div>

                    <div>
                        <img src={images.voter} alt="Voter profile pic" />
                    </div>
                </div>
            </div>

            <div className='app__admin-controlpanel'>
                <h2>
                    Admin actions
                </h2>

                <div className='actions-cards'>

                    
                    <div className='action-card'>
                       
                        <img src={images.verifyvoter} alt="electionsimg" id='resultsimg' />
                       
                        <div className="container">
                            <h3> Create a new election  </h3>
                            <div>
                               Create a new election and get election code
                            </div> 
                        </div>
                    </div>
                    <div className='action-card'>
                       
                        <img src={images.results} alt="electionsimg" id='resultsimg' />
                       
                        <div className="container">
                            <h3>Verify voter registration applications  </h3>
                            <div>
                               Approve or reject voter's application
                            </div> 
                        </div>
                    </div>
                    <div className='action-card'>
                       
                        <img src={images.results} alt="electionsimg" id='resultsimg' />
                       
                        <div className="container">
                            <h3>Verify Candidate's registration applications  </h3>
                            <div>
                               Approve or reject Candidate's application
                            </div> 
                        </div>
                    </div>
                    <div className='action-card'>
                       
                        <img src={images.results} alt="electionsimg" id='resultsimg' />
                       
                        <div className="container">
                            <h3> See the  Voters list  </h3>
                            <div>
                               See the list of all eligible voters
                            </div> 
                        </div>
                    </div>
                    <div className='action-card'>
                       
                        <img src={images.results} alt="electionsimg" id='resultsimg' />
                       
                        <div className="container">
                            <h3> Voters / Candidates management  </h3>
                            <div>
                              Manage voters/ candidates
                            </div> 
                        </div>
                    </div>
                 
                </div>
            </div>

        </div>

    );
}
