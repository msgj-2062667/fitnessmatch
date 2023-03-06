import React from 'react';

export function QuestionOne(props) {
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
                                                <input type="checkbox" id="weightLoss"/>
                                                <label for="weightLoss">Weight loss</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="weightGain"/>
                                                <label for="weightGain">Weight gain</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="toning"/>
                                                <label for="toning">Toning</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="flexibility"/>
                                                <label for="flexibility">Flexibility</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="aerobic"/>
                                                <label for="aerobic">Cardio/Aerobic fitness</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="endurance"/>
                                                <label for="endurance">Endurance training</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="bodyBuilding"/>
                                                <label for="bodyBuilding">Body building</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="muscle"/>
                                                <label for="muscle">Increase muscle strength</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="healthier"/>
                                                <label for="healthier">Be healthier & feel better</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="eventPrep"/>
                                                <label for="eventPrep">Prep for an event</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="recover"/>
                                                <label for="recover">Recover and rehab</label>
                                            </div>

                                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                                <input type="checkbox" id="routine"/>
                                                <label for="routine">Build a workout routine</label>
                                            </div>

                                    </div>
                                </div>
                                <br/><br/>

                                {/* button to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <a href="q2.html" className="btn quiz-button" role="button">Next</a>
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