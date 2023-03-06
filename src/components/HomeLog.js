import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function HomeLog(props) {
    return (
        <body>
            <div className="container-fluid">
                <div className="wrapper">
                <nav className="navbar">
                    <img className='logo' src="../img/logo.jpg" alt="Logo"/>
                    <div className="buttons">
                    <Link to="/login" className="btn btn-green">Log in</Link>
                    <Link to="/signup" className="btn btn-green">Sign up</Link>
                    </div>
                </nav>
                <main className="index">
                    <div>
                    <p className="welcome-text">Welcome to</p>
                    <p>Fitness Match</p>
                    <Link to="/signup" className="btn btn-large">Sign Up</Link>
                    <p>and Find Your Perfect Trainer!</p>
                    </div>
                </main>
                </div>

                <footer className="footerr">
                <div className="footer-item">
                    <p>
                    <a href="contact@fitnessmatch.com">
                        <span className="material-icons ">email </span>
                        contact@fitnessmatch.com
                    </a>
                    </p>
                    <p>
                    <a href="206-254-7199">
                        <span className="material-icons">phone </span>
                        206-254-7199
                    </a>
                    </p>
                </div>

                <p className="footer-copyright">&copy; INFO 340 Project</p>
                </footer>

            </div>

        </body>
    )
}
