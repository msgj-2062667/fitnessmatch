import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function HomeQuiz(props) {
    return (
        <body>
            <div className="container-fluid">
                <div className="wrapper">
                    <nav className="navbar">
                        <img className='logo' src="img/logo.jpg" alt="Logo"/>
                        <div class="buttons">
                            <Link to="/schedule" className="btn btn-green">View Schedule</Link>
                            <Link to="/userProfile" className="btn btn-green">My Profile</Link>
                        </div>
                    </nav>

                    <main className="index">
                        <div>
                            <p className="welcome-text">Welcome to</p>
                            <p>Fitness Match</p>
                            <Link to="/q1" className="btn btn-large">Take a Quiz</Link>
                            <p>and Find Your Perfect Trainer!</p>
                        </div>
                    </main>
                </div>
                <footer className="footerr">
                    <div className="footer-item">
                        <ul className="footer-ul">
                            <div className="footer-item-div">
                                <li><a href="haeun@uw.edu"><span className="material-icons">email</span>haeun@uw.edu</a></li>
                                <li class="footer-contact-li"><a href="2137139045"><span className="material-icons">phone</span>213-713-9045</a>
                                </li>
                            </div>
                            <div className="footer-item-div">
                                <li><a href="mel4nie@uw.edu"><span className="material-icons">email</span>mel4nie@uw.edu</a></li>
                                <li className="footer-contact-li"><a href="5037802938"><span className="material-icons">phone</span>503-780-2938</a>
                                </li>
                            </div>
                            <div className="footer-item-div">
                                <li><a href="msgj@uw.edu"><span className="material-icons">email</span>msgj@uw.edu</a></li>
                                <li className="footer-contact-li"><a href="2065326132"><span className="material-icons">phone</span>206-532-6132</a></li>
                            </div>
                            <div className="footer-item-div">
                                <li><a href="parkerkb@uw.edu"><span className="material-icons">email</span>parkerkb@uw.edu</a></li>
                                <li className="footer-contact-li"><a href="4259196264"><span className="material-icons">phone</span>425-919-6264</a></li>
                            </div>
                            <div className="footer-item-div">
                                <li><a href="jhjm7031@uw.edu"><span className="material-icons">email</span>jhjm7031@uw.edu</a></li>
                                <li className="footer-contact-li"><a href="2064842638"><span className="material-icons">phone</span>206-484-2638</a></li>
                            </div>
                        </ul>
                    </div>
                    <p className="footer-copyright">&copy; INFO 340 Project</p>
                </footer>
            </div>
        </body>
    )
}
