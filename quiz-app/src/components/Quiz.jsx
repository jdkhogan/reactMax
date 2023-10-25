import React, {useState} from "react";
import Question from "./Question";
import Card from "./Card";

import QUESTIONS from "../assets/questions.js";
import completeImg from "../assets/quiz-complete.png";


const Quiz = (props) => {
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    if (quizIsComplete) {
        return (
            <Card id="summary">
                <h2>Quiz Complete</h2>
                <img src={completeImg} alt="Trophy image" />
            </Card>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers( (prev) => [...prev, selectedAnswer] );
    };

    return (
        <Card id="quiz">
            <div id="question">
                <h2>
                    Question {activeQuestionIndex+1}: {QUESTIONS[activeQuestionIndex].text}
                </h2>
            </div>
            <ul id="answers">
                {shuffledAnswers.map((answer, i) => (
                    <li key={answer} className="answer">
                        <button onClick={() => handleSelectAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default Quiz;