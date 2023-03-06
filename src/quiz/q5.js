import React from 'react';

export function QuestionFive(props) {
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
                                    <progress id="file" value="57.14" max="100" className="quiz-progress"> 57.14% </progress>
                                    <label for="file">4 out of 7 completed</label>
                                </div>

                                {/* question */}
                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">What style of trainer do you prefer?
                                        <small>(Check all that apply)</small>
                                    </h2>
                                </div>

                                <br/><br/>

                                {/* answer choices */}
                                <div className="container">
                                    <div className="row justify-content-center">

                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="drill"/>
                                            <label for="drill">Drill sergeant</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="supportive"/>
                                            <label for="supportive">Supportive, nurturing coach</label>
                                        </div>
                                        <div className="col col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto">
                                            <input type="checkbox" id="educator"/>
                                            <label for="educator">Educator/teacher</label>
                                        </div>

                                    </div>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <a href="q4.html" className="btn quiz-button" role="button">Previous</a>
                                    </div>
                                    <div>
                                        <a href="q6.html" className="btn quiz-button" role="button">Next</a>
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