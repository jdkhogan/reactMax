import { useRef } from "react";

export default function Answers({
    answers, 
    selectedAnswer, 
    answeredState, 
    onSelect
}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer, i) => {
                const isSelected = answer === selectedAnswer;
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
                        <button className={ansClasses} onClick={() => onSelect(answer)} disabled={answeredState !== ''}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}