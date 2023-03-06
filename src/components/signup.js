import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function SignUpPage(props) {
    return (
        <body>
            <div className="wrapper">
                <nav className="navbar">
                <Link to="/homeLog"><img className='logo' src="../img/logo.jpg" alt="Logo"/></Link>
                <div className="buttons">
                    <Link to="/login" className="btn btn-green">Alreay have account?</Link>
                </div>
                </nav>

                <main>
                {/* <!-- firebase code goes here --> */}
                </main>

                <footer>
                <div className="p-3">
                    <p><a href="contact@fitnessmatch.com"><span className="material-icons">email </span>contact@fitnessmatch.com</a></p>
                    <p><a href="206-254-7199"><span className="material-icons">phone </span>206-254-7199</a></p>
                </div>

                <p>&copy; INFO 340 Project</p>
                </footer>
            </div>
        </body>
    )
}
