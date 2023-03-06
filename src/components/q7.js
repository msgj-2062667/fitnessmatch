import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function QuestionSeven(props) {
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

        navigate("/qResults");
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
                                    <progress id="file" value="85.71" max="100" className="quiz-progress"> 85.71% </progress>
                                    <label for="file">6 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">What type of workouts do you want to do?
                                        <small>(Check all that apply)</small>
                                    </h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="cardio" onChange={handleInputChange}/>
                                            <label for="cardio">Cardio</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="machines" onChange={handleInputChange}/>
                                            <label for="machines">Machines</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="swimming" onChange={handleInputChange}/>
                                            <label for="swimming">Swimming</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="triathlon" onChange={handleInputChange}/>
                                            <label for="triathlon">Triathlon Training</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="lifting" onChange={handleInputChange}/>
                                            <label for="lifting">Lifting</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="cycling" onChange={handleInputChange}/>
                                            <label for="cycling">Cycling</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="kickboxing" onChange={handleInputChange}/>
                                            <label for="kickboxing">Kickboxing</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="yoga" onChange={handleInputChange}/>
                                            <label for="yoga">Yoga</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="zumba" onChange={handleInputChange}/>
                                            <label for="zumba">Zumba</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="pilates" onChange={handleInputChange}/>
                                            <label for="pilates">Pilates</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="hiit" onChange={handleInputChange}/>
                                            <label for="hiit">HIIT</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                            <input type="checkbox" id="crossFit" onChange={handleInputChange}/>
                                            <label for="crossFit">CrossFit</label>
                                        </div>
                                    </div>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <Link to="/q6" className="btn quiz-button" role="button">Previous</Link>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn quiz-button" role="button">Submit</button>
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
