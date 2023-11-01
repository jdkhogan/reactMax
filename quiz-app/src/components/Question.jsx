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

    let timer = 10000;
    if (answer.selectedAnswer) timer = 1000;
    if (answer.isCorrect !== null) timer = 2000;

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
            <Timer 
                key={timer}
                timeout={timer} 
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} 
            />
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
