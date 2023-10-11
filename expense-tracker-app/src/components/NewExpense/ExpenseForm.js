import {useState} from 'react';

import './ExpenseForm.css';
import Card from '../Card';

/**
 * Expense Form 
 * @param {string} date 
 * @param {string} title 
 * @param {number} amount 
 * @returns HTML code for an Expense Form
 */

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        title: "",
        date: "",
        amount: "",
    });
    
    const handleInput = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState, 
                [e.target.id]: e.target.value
            }
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        };

        props.onSaveExpenseData(newItem);

        setUserInput({
            title: "",
            amount: "",
            date: ""
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor='title'>Title</label>
                    <input 
                        type='text' 
                        id='title' 
                        name='title' 
                        value={userInput.title} 
                        onChange={handleInput}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor='date'>Date</label>
                    <input 
                        type='date' 
                        min='2019-01-01' 
                        max='2023-12-31' 
                        id='date' 
                        name='date' 
                        value={userInput.date} 
                        onChange={handleInput}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor='amount'>Amount</label>
                    <input 
                        type='number' 
                        min='0' 
                        step='0.01' 
                        id='amount' 
                        name='amount' 
                        value={userInput.amount} 
                        onChange={handleInput}>
                    </input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>  
                <button type='button' onClick={props.onCancel}>Cancel</button>  
            </div>
        </form>
    );
}

export default ExpenseForm;