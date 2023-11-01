import Card from "./Card";

import completeImg from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/questions.js";

export default function Summary({userAnswers}) {
    const stats = {
        'correct': 0,
        'incorrect': 0,
        'skipped': 0
    };
    
    const summaryArr = userAnswers.map((a, i)=> {
        const correctAnswer = QUESTIONS[i].answers[0]
        
        let userAnswer = 'skipped';
        if (a) {
            if (a === correctAnswer) {
                userAnswer = null;
                stats.correct++;
            } else {
                userAnswer = a; 
                stats.incorrect++;   
            } 
        } else {
            stats.skipped++;
        }

        return { 
            'question': QUESTIONS[i].text, 
            'userAnswer': userAnswer,
            'correctAnswer': correctAnswer, 
        };
    });



    return (
        <Card id="summary">
            <h2>Quiz Complete</h2>

            <img src={completeImg} alt="Trophy image" />
            
            <div id='summary-stats'>
                <p>
                    <span className="text">Correct</span>
                    <span className="number">{Math.round(100 * stats.correct / summaryArr.length)}%</span>
                </p>
                <p>
                    <span className="text">Incorrect</span>
                    <span className="number">{Math.round(100 * stats.incorrect / summaryArr.length)}%</span>
                </p>
                <p>
                    <span className="text">Skipped</span>
                    <span className="number">{Math.round(100 * stats.skipped / summaryArr.length)}%</span>
                </p>
            </div>
            <ol>
                {summaryArr.map((q, i)=> {
                    let msg = 'You got it right!';
                    let userAnswerClass = 'correct';
                    if (q.userAnswer === 'skipped') {
                        msg = 'You skipped this question.';
                        userAnswerClass = 'skipped';
                    }
                    if (q.userAnswer && q.userAnswer !== 'skipped') {
                        msg = `You answered: ${q.userAnswer} That's incorrect.`;
                        userAnswerClass = 'wrong';
                    }

                    return (
                        <li key={'question_' + i}>
                            <h3>{i+1}</h3>
                            <p className="question">{q.question}</p>
                            <p className="answer">
                                The correct answer was: {q.correctAnswer}
                            </p>
                            <p className={`user-answer ${userAnswerClass}`}>{msg}</p>
                        </li>
                    );
                })}
            </ol>
        </Card>
    );
}