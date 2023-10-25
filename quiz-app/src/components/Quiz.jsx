import React, {useState} from "react";
import Question from "./Question";
import Card from "./Card";

const Quiz = (props) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    return (
        <Card>
            <Question />
        </Card>
    );
};

export default Quiz;