import React, {useState, useCallback} from "react";
import Card from "./Card";
import Question from "./Question";

import QUESTIONS from "../assets/questions.js";
import completeImg from "../assets/quiz-complete.png";


const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers( (prev) => [...prev, selectedAnswer] );
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <Card id="summary">
                <h2>Quiz Complete</h2>
                <img src={completeImg} alt="Trophy image" />
            </Card>
        );
    }


    return (
        <Card id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </Card>
    );
};

export default Quiz;