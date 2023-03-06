import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';
import {StoreInput, Navigate} from './QuizQuestionSubmit';

export function QuestionOne(props) {
    const [selections, setSelections] = useState([]);

    const handleInputChange = function(event) {
        const {id} = event.target;
        const newSelections = selections.includes(id) ? selections.filter((input) => input !== id) : [...selections, id];
        setSelections(newSelections);
    }

    const navigate = useNavigate();

    const handleSubmit = function(event) {
        event.preventDefault();
        // form submission work

        navigate("/q2");
    }

    return (
        <body>
            <header>
                <Link to="./homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
            </header>

            <h1>Preference Quiz</h1>

            <div id="body-wrapper">

                <main>
                    <div id="body-content">
                        <form onSubmit={handleSubmit}>
                            <div>
                                {/* progress bar */}
                                <div className="d-flex justify-content-center" aria-label="progress bar of questions completed">
                                    <progress id="file" value="0" max="100" className="quiz-progress"> 0% </progress>
                                    <label for="file">0 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">What are your fitness goals?
                                        <small>(Check all that apply)</small>
                                    </h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="weightLoss" onChange={handleInputChange}/>
                                            <label for="weightLoss">Weight loss</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="weightGain" onChange={handleInputChange}/>
                                            <label for="weightGain">Weight gain</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="toning" onChange={handleInputChange}/>
                                            <label for="toning">Toning</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="flexibility" onChange={handleInputChange}/>
                                            <label for="flexibility">Flexibility</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="aerobic" onChange={handleInputChange}/>
                                            <label for="aerobic">Cardio/Aerobic fitness</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="endurance" onChange={handleInputChange}/>
                                            <label for="endurance">Endurance training</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="bodyBuilding" onChange={handleInputChange}/>
                                            <label for="bodyBuilding">Body building</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="muscle" onChange={handleInputChange}/>
                                            <label for="muscle">Increase muscle strength</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="healthier" onChange={handleInputChange}/>
                                            <label for="healthier">Be healthier & feel better</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="eventPrep" onChange={handleInputChange}/>
                                            <label for="eventPrep">Prep for an event</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="recover" onChange={handleInputChange}/>
                                            <label for="recover">Recover and rehab</label>
                                        </div>

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="routine" onChange={handleInputChange}/>
                                            <label for="routine">Build a workout routine</label>
                                        </div>

                                    </div>
                                </div>
                                <br/><br/>

                                {/* button to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <button type="submit" className="btn quiz-button" role="button">Next</button>
                                </div>

                            </div>
                        </form>
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
