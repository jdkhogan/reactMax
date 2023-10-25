import {useState, useEffect} from "react";

const Timer = ({timeout, onTimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prev) => prev - 100);
        }, 100);
    }, []);


    return (
        <progress id="question-time" max={timeout} value={remainingTime} />
    );
};

export default Timer;