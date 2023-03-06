import React from 'react';

export function QuizResults(props) {
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
                                    <progress id="file" value="100" max="100" className="quiz-progress"> 100% </progress>
                                    <label for="file">7 out of 7 completed</label>
                                </div>

                                <br/><br/>

                                <div className="d-flex justify-content-center">
                                    <h2 className="quiz-question">Click to see your matches!</h2>
                                </div>

                                <br/><br/>

                                {/* buttons to switch pages */}
                                <div className="d-flex flex-row justify-content-center">
                                    <div>
                                        <a href="q7.html" className="btn quiz-button" role="button">Back to quiz</a>
                                    </div>
                                    <a href="../web pages/trainermatches.html" className="btn quiz-button" role="button">View</a>
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