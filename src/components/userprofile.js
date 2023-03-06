import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function UserProfile(props) {
    return (
        <body>
            <header>
                <Link href="/homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
                <div className="button no-disp">
                    <Link to="/schedule" className="btn btn-green">View Schedule</Link>
                </div>
            </header>

            <h1>User Profile</h1>

            <div id="body-wrapper">

                <main>
                    <div id="body-content">
                        <div className="box">

                            <section className="image">
                                <canvas id= "canv1"></canvas>

                            </section>

                            <section className="info1">
                                <label for="name">First Name :</label>

                                <br/><br/><br/>

                                <label for="birth">Birth :</label>

                                <br/><br/><br/>

                                <label for="address">Address Line 1 :</label>

                                <br/><br/><br/>

                                <label for="address">Address Line 2 (optional) :</label>

                                <br/><br/><br/>

                                <label for="address">City :</label>

                                <br/><br/><br/>

                                <label for="phone">Phone number :</label>

                                <br/><br/><br/>

                                <label for="height">Height :</label>

                                <br/><br/><br/>

                                <label for="trainer">Your Trainer :</label>
                                <button onclick="window.open('trainerprofile.html', '_self');">Trainer Profile</button>

                            </section>

                            <section className="info2">
                                <label for="name">Last Name :</label>

                                <br/><br/><br/>

                                <label for="gender">Gender :</label>

                                <br/><br/><br/>

                                <br/><br/><br/>

                                <br/><br/><br/>

                                <label for="address">State :</label>

                                <br/><br/><br/>

                                <label for="email">Email :</label>

                                <br/><br/><br/>

                                <label for="weight">Weight :</label>

                            </section>

                            <section className="info3">
                                <br/><br/><br/>

                                <br/><br/><br/>

                                <br/><br/><br/>

                                <br/><br/><br/>

                                <label for="address">Zip :</label>

                            </section>
                        </div>
                    </div>

                    <div className="edit extra-padding">
                        <Link to="/editProfile" className="btn btn-green">Edit</Link>
                    </div>

                    <div className="edit extra-padding">
                        <Link to="/q1" className="btn btn-green">Take the quiz again</Link>
                    </div>

                </main>

                <footer>
                    <div>
                        <p><a href="contact@fitnessmatch.com"><span className="material-icons">email </span>contact@fitnessmatch.com</a></p>
                        <p><a href="206-254-7199"><span className="material-icons">phone </span>206-254-7199</a></p>
                    </div>
                    <p>&copy; INFO 340 Project</p>
                </footer>

            </div>

        </body>
    )
}
