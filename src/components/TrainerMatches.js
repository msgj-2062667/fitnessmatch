import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

function TrainerCard({ props }){
  const { id, name, descr, img } = props;

return(
  <div className="col-md-6 col-xl-4 d-flex">
  <div className="card mb-5 d-flex shadow">
    <div className="card-body">
      <div className="trainer-pic-container">
        <img className="card-img-top img-fluid mb-2 rounded trainer-pic" src="../img/${img}"
          alt="Trainer${name}"/>
      </div>
      <h5 className="card-header">{name}</h5>
      <p className="card-text">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{descr}</li>
      </ul>
      </p>
      <a href="#" onclick="gotoTrainerProfile(1)" className="btn btn-green" role="button">View
        Profile</a>
    </div>
  </div>
  </div>
);
}

export function TrainerMatch(props) {

    const trainerCards = props.trainers.map((trainerObj) => {
      return <TrainerCard key={trainerObj.id} trainerData={trainerObj}/>;
    });

return (
  <body>

    <div className="trainer-matches-bg">
      <header>
        <Link to="/homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
        <div className="button no-disp">
          <Link to="/qResults" className="btn btn-green">Back to Quiz Results</Link>
        </div>
      </header>

      <h1>Trainer Matches</h1>

      <main>
        <div className="container pt-7 mt-5">
          <div className="row justify-content-center">
          {trainerCards}
          </div>
        </div>

        <div className="button button-bot mt-5">
          <Link to="/qResults" className="btn btn-green">Back to Quiz Results</Link>
        </div>

      </main>
    </div>

    <footer className="footerr pt-3">
      <div>
        <p><a href="contact@fitnessmatch.com"><span className="material-icons">email </span>contact@fitnessmatch.com</a></p>
        <p><a href="206-254-7199"><span className="material-icons">phone </span>206-254-7199</a></p>
      </div>
      <p>&copy; INFO 340 Project</p>
    </footer>
  </body>
  )
}
