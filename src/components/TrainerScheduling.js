import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

function DayCard(props) {
  return (
    <div className="col-sm-6 col-md-4 col-xl-1 card-column-container">
      <div className="card mb-5 day-container">
        <div className="card-body">
          <h5 className="card-title text-center">{props.day}</h5>
          <p className="card-text">
          <ul className="list-unstyled list-inline">
            <div className="row text-center">
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary mt-2 mb-2 timeslot-button">10:30-11:30</a></li>
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary mt-2 mb-2 timeslot-button">12:00-1:00</a></li>
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary mt-2 mb-2 timeslot-button">1:30-2:30</a></li>
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary  mt-2 mb-2 timeslot-button">3:00-4:00</a></li>
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary mt-2 mb-2 timeslot-button">4:30-5:30</a></li>
              <li className="list-inline-item"><a href="#" className="btn btn-outline-primary  mt-2 mb-2 timeslot-button">6:00-7:00</a></li>
            </div>
          </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export function TrainerScheduling(props) {
  return (
    <body>

      <div className="trainer-scheduling-bg">
        <header>
          <Link to="/homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
          <div className="button no-disp">
            <Link to="/trainerProfile" className="btn btn-green">Back to Trainer Profile</Link>
          </div>
        </header>

        <h1>Schedule with Trainer</h1>

        <div className="calendar-container justify-content-center">
          <div className="row justify-content-center mt-5 week-container">

            <DayCard day="Sunday" />
            <DayCard day="Monday" />
            <DayCard day="Tuesday" />
            <DayCard day="Wednesday" />
            <DayCard day="Thursday" />
            <DayCard day="Friday" />
            <DayCard day="Saturday" />

            <div className="schedule-bot-btn schedule-padding">
              <Link to="/schedule" className="btn btn-green">Add to My Schedule</Link>
            </div>

            <div className="button button-bot">
              <Link to="/trainerProfile" className="btn btn-green">Back to Trainer Profile</Link>
            </div>

          </div>
        </div>

      </div>

      <footer className="footerr">
            <p><a href="contact@fitnessmatch.com"><span className="material-icons">email </span>contact@fitnessmatch.com</a></p>
            <p><a href="206-254-7199"><span className="material-icons">phone </span>206-254-7199</a></p>

        <p>&copy; INFO 340 Project</p>
      </footer>

    </body>
  )
}
