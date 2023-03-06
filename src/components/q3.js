import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function QuestionThree(props) {
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

        navigate("/q4");
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
                                {/* progress ba */}
                                <div className="d-flex justify-content-center" aria-label="progress bar of questions completed">
                                    <progress id="file" value="28.57" max="100" className="quiz-progress"> 28.57% </progress>
                                    <label for="file">2 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">When do you want to train?
                                        <small>(Check all that apply)</small>
                                    </h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="d-flex justify-content-center">
                                    <h3 className="sub-question">Days</h3>
                                </div>

                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="monday"/>
                                            <label for="monday">Monday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="tuesday"/>
                                            <label for="tuesday">Tuesday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="wednesday"/>
                                            <label for="wednesday">Wednesday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="thursday"/>
                                            <label for="thursday">Thursday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="friday"/>
                                            <label for="friday">Friday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="saturday"/>
                                            <label for="saturday">Saturday</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="sunday"/>
                                            <label for="sunday">Sunday</label>
                                        </div>

                                    </div>
                                </div>

                                <br/>

                                <div className="d-flex justify-content-center">
                                    <h3 className="sub-question">Time of day</h3>
                                </div>

                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="morning" onChange={handleInputChange}/>
                                            <label for="morning">Morning</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="afternoon" onChange={handleInputChange}/>
                                            <label for="afternoon">Afternoon</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="evening" onChange={handleInputChange}/>
                                            <label for="evening">Evening</label>
                                        </div>

                                    </div>
                                </div>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <Link to="/q2" className="btn quiz-button" role="button">Previous</Link>
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
