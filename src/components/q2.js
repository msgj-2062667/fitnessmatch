import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function QuestionTwo(props) {
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

        navigate("/q3");
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
                                    <progress id="file" value="14.29" max="100" className="quiz-progress"> 14.29% </progress>
                                    <label for="file">1 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">How active are you now?</h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="activeness" id="neverWorkOut" onChange={handleInputChange}/>
                                            <label for="neverWorkOut">I never work out</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="activeness" id="aWhile" onChange={handleInputChange}/>
                                            <label for="aWhile">It's been a while</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="activeness" id="fewTimes" onChange={handleInputChange}/>
                                            <label for="fewTimes">A few times a week</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="activeness" id="partOfDay" onChange={handleInputChange}/>
                                            <label for="partOfDay">Fitness is part of my daily life</label>
                                        </div>

                                    </div>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <Link to="/q1" className="btn quiz-button" role="button">Previous</Link>
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
