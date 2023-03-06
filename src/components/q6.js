import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function QuestionSix(props) {
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

        navigate("/q7");
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
                                    <progress id="file" value="71.43" max="100" className="quiz-progress"> 71.43% </progress>
                                    <label for="file">5 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">When do you want to start?</h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="radio" name="start-date" id="flexible" onChange={handleInputChange}/>
                                            <label for="flexible">I'm flexible</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="radio" name="start-date" id="asap" onChange={handleInputChange}/>
                                            <label for="asap">As soon as possible</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="radio" name="start-date" id="inFewDays"onChange={handleInputChange}/>
                                            <label for="inFewDays">In the next few days</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="radio" name="start-date" id="inWeek"/>
                                            <label for="inWeek">In a week or more</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="radio" name="start-date" id="inMonth"/>
                                            <label for="inMonth">In a month or more</label>
                                        </div>

                                    </div>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <Link to="/q5" className="btn quiz-button" role="button">Previous</Link>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn quiz-button" role="button">Next</button>
                                    </div>
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
