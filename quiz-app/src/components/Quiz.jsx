import React, {useState, useCallback} from "react";
import Timer from "./Timer";
import Card from "./Card";

import QUESTIONS from "../assets/questions.js";
import completeImg from "../assets/quiz-complete.png";


const Quiz = (props) => {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answeredState, setAnsweredState] = useState('');
    
    const activeQuestionIndex = answeredState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnsweredState('answered');
        setUserAnswers( (prev) => [...prev, selectedAnswer] );

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {        
                setAnsweredState('correct'); 
            } else {
                setAnsweredState('wrong' );
            } 

            setTimeout(() => {
                setAnsweredState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

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

    return (
        <Card id="quiz">
            <div id="question">
                <Timer key={activeQuestionIndex} timeout="10000" onTimeout={handleSkipAnswer} />
                <h2>
                    Question {activeQuestionIndex+1}: {QUESTIONS[activeQuestionIndex].text}
                </h2>
            </div>
            <ul id="answers">
                {shuffledAnswers.map((answer, i) => {
                    const isSelected = answer === userAnswers[userAnswers.length - 1];
                    let ansClasses = '';

                    if (isSelected) {
                        if (answeredState === 'answered') {
                            ansClasses = 'selected'
                        }
    
                        if (answeredState === 'correct' || answeredState === 'wrong') {
                            ansClasses = answeredState;
                        }

                    }

                    
                    return (
                        <li key={answer} className="answer">
                            <button className={ansClasses} onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default Quiz;