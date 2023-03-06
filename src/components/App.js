import React from 'react';
import {Routes, Route} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export default function App(props) {
    return (
        <Routes>
            <Route path="homeLog" element={<HomeLog />} />
            <Route path="homeQuiz" element={<HomeQuiz />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="q1" element={<QuestionOne />} />
            <Route path="q2" element={<QuestionTwo />} />
            <Route path="q3" element={<QuestionThree />} />
            <Route path="q4" element={<QuestionFour />} />
            <Route path="q5" element={<QuestionFive />} />
            <Route path="q6" element={<QuestionSix />} />
            <Route path="q7" element={<QuestionSeven />} />
            <Route path="qResults" element={<QuizResults />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="trainerMatch" element={<TrainerMatch />} />
            <Route path="trainerProfile" element={<TrainerProfile />} />
            <Route path="trainerScheduling" element={<TrainerScheduling />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
        </Routes>
    )
}
