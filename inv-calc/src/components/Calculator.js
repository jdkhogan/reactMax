import React, { useState } from 'react';
import InputField from './InputField';
import styles from './Calculator.module.css';

import logo from '../assets/investment-calculator-logo.png';


function Calculator(props) {
    const [userInput, setUserInput] = useState({
        currentSavings: "",
        yearlyContribution: "",
        expectedReturn: "",
        duration: ""
    });
    
    const handleInput = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState, 
                [e.target.id]: e.target.value
            }
        });
    };
    
    const handleReset = () => {
        setUserInput({
            currentSavings: "",
            yearlyContribution: "",
            expectedReturn: "",
            duration: ""
        });
        props.onReset();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateHandler(userInput);
    };

    const calculateHandler = (userInput) => {
        let currentSavings = +userInput.currentSavings; 
        const yearlyContribution = +userInput.yearlyContribution; 
        const expectedReturn = +userInput.expectedReturn / 100;
        const duration = +userInput.duration;

        let totalInterest = 0;
        let totalInvestedCapital = currentSavings;
    
        // The below code calculates yearly results (total savings, interest etc)
        const newData = [];
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalInterest += yearlyInterest;
            totalInvestedCapital += yearlyContribution;
            newData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                totalInterest: totalInterest,
                totalInvestedCapital: totalInvestedCapital
            });
        }
    
        // do something with yearlyData ...
        props.onCalculate(newData);
    };

    return (
        <div className="calculator">
            <header className={styles.header}>
                <img src={logo} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>

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
        </div>
    );
}

export default Calculator;