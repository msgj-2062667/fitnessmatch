import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function Schedule(props) {
    return (
        <body>
            <header>
                <Link to="/homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
                <div className='button no-disp'>
                <Link to="/userProfile" className="btn btn-green">View Profile</Link>
                </div>
            </header>

            <h1>User Schedule</h1>

            <div id="body-wrapper">
                <main>
                    <div id="body-content">

                    <table>
                    <thead>
                    <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Sunday</th>
                        <th scope="col">Monday</th>
                            <th scope="col">Tuesday</th>
                            <th scope="col">Wednesday</th>
                            <th scope="col">Thursday</th>
                            <th scope="col">Friday</th>
                            <th scope="col">Saturday</th>

                     </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>10:30 AM ~ 11:30 AM</td>

                    </tr>
                    <tr>
                        <td>12:00 PM ~ 1:00 PM</td>

                    </tr>

                    <tr>
                        <td>1:30 PM ~ 2:30 PM</td>

                    </tr>

                    <tr>
                        <td>3:00 PM ~ 4:00 PM</td>

                    </tr>

                    <tr>
                        <td>4:30 PM ~ 5:30 PM</td>

                    </tr>

                    <tr>
                        <td>6:00 PM ~ 7:00 PM</td>

                    </tr>

                </tbody>
                </table>

                </div>

                <div className="edit extra-padding">
                    <Link to="/trainerScheduling" className="btn btn-green">Edit</Link>
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
