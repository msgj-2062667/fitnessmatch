import React from 'react';

export function QuestionFour(props) {
    return (
        <body>
            <header>
                <a href="../index.html"><img className="logo" src="../img/logo.jpg" alt="Logo"/></a>
            </header>

            <h1>Preference Quiz</h1>

            <div id="body-wrapper">

                <main>
                    <div id="body-content">
                        <form>
                            <div>
                                {/* progress bar */}
                                <div className="d-flex justify-content-center" aria-label="progress bar of questions completed">
                                    <progress id="file" value="42.86" max="100" className="quiz-progress"> 42.86% </progress>
                                    <label for="file">3 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">How often do you want to train?</h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="training-frequency" id="daily"/>
                                            <label for="daily">Daily</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="training-frequency" id="fewTimesWeek"/>
                                            <label for="fewTimesWeek">A few times a week</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="training-frequency" id="onceWeek"/>
                                            <label for="onceWeek">Once a week</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-auto col-xl-auto">
                                            <input type="radio" name="training-frequency" id="fewTimesMonth"/>
                                            <label for="fewTimesMonth">A few times a month</label>
                                        </div>
                                    </div>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <a href="q3.html" className="btn quiz-button" role="button">Previous</a>
                                    </div>
                                    <div>
                                        <a href="q5.html" className="btn quiz-button" role="button">Next</a>
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