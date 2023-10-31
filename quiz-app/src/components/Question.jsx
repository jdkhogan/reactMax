import React, {useState} from "react";

import Timer from "./Timer";
import Answers from "./Answers";
import QUESTIONS from "../assets/questions.js";

export default function Question({
    index, 
    onSelectAnswer, 
    onSkipAnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answeredState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answeredState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answeredState = 'answered';
    }
    
    return (
        <div id="question">
            <Timer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers 
                answers={QUESTIONS[index].answers} 
                selectedAnswer={answer.selectedAnswer} 
                answeredState={answeredState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
};
