import React, { useState } from 'react';
import InputField from './InputField';
import styles from './Calculator.module.css';


function Calculator(props) {
    const initialUserInput = {
        currentSavings: "",
        yearlyContribution: "",
        expectedReturn: "",
        duration: ""
    };

    const [userInput, setUserInput] = useState(initialUserInput);
    
    const handleInput = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState, 
                [e.target.id]: +e.target.value
            }
        });
    };
    
    const handleReset = () => {
        setUserInput(initialUserInput);
        props.onReset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateHandler(userInput);
    };

    const calculateHandler = (userInput) => {
        let currentSavings = userInput.currentSavings; 
        const yearlyContribution = userInput.yearlyContribution; 
        const expectedReturn = userInput.expectedReturn / 100;
        const duration = userInput.duration;

        let totalInterest = 0;
        let totalInvestedCapital = currentSavings;
    
        const newData = [];
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalInterest += yearlyInterest;
            totalInvestedCapital += yearlyContribution;
            newData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                totalInterest: totalInterest,
                totalInvestedCapital: totalInvestedCapital
            });
        }
    
        props.onCalculate(newData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles['input-group']}>
                <InputField 
                    name='currentSavings'
                    label="Current Savings ($)"
                    value={userInput.currentSavings}
                    onChange={handleInput} 
                />
                <InputField 
                    name='yearlyContribution'
                    label="Yearly Savings ($)"
                    value={userInput.yearlyContribution}
                    onChange={handleInput} 
                />
            </div>
            <div className={styles['input-group']}>
                <InputField 
                    name='expectedReturn'
                    label="Expected Interest (%, per year)"
                    value={userInput.expectedReturn}
                    onChange={handleInput} 
                />
                <InputField 
                    name='duration'
                    label="Investment Duration (years)"
                    value={userInput.duration}
                    onChange={handleInput} 
                />
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={handleReset}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default Calculator;