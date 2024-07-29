import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PersonalDetails = () => (
    <div id='res'>
        <h2 className='commonhead'>Contact</h2><br></br>
        <p className="center-content" id='pararesume'>"I'm delighted you're interested in connecting. If you’d like to say hello or discuss opportunities, please feel free to reach out through any of the following methods."</p>
        <h5 id='contact2'>Contact Details</h5>

        <div >
            <p className='personaldetails2'>
                <ul>
                    <i className="bi bi-house-heart" id='house'></i>&nbsp;&nbsp;<b>:</b>&nbsp;&nbsp;Hyderabad, India
                    <li><i className="bi bi-telephone" id='phone'></i>&nbsp;&nbsp; <b>:</b>&nbsp;&nbsp; +91 8332056755</li>
                    <li><i className="bi bi-envelope" id='mail'></i>&nbsp;&nbsp;<b>:</b>&nbsp;&nbsp;  <a href="mailto:neelopharpraveen@gmail.com">neelopharpraveen@gmail.com</a></li><br></br>
                    <h5 id='contact3'>Find Me on Job Platforms</h5><br></br><br></br>
                   </ul>
                   <ul className='website'>
                    <li className="link-item">
                        <a href="https://www.linkedin.com/in/neelophar-kona-277172278/" target="_blank" rel="noopener noreferrer">
                        <img src="./linkdin.jpg" alt="LinkedIn" className="custom-icon1" /> 
                        <span className="hover-text">LinkedIn</span></a>
                    </li>
                    <li className="link-item">
                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer">
                        <img src="/naukri.jpg" alt="Naukri" className="custom-icon1" />
                        <span className="hover-text">Naukri</span> </a>
                    </li>
                    <li className="link-item">
                        <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" rel="noopener noreferrer">
                        <img src="/indeed3.png" alt="indeed" className="custom-icon1" />
                        <span className="hover-text">Indeed</span></a>
                    </li>
                </ul>
            </p>




        </div>







    </div>
);

export default PersonalDetails;

