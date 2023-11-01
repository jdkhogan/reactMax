import React, {useState, useCallback} from "react";
import Card from "./Card";
import Question from "./Question";
import Summary from "./Summary";

import QUESTIONS from "../assets/questions.js";


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
            <Summary userAnswers={userAnswers} />
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