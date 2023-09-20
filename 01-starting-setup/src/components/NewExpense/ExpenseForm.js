import {useState} from 'react';

import './ExpenseForm.css';
import Card from '../Card';

/**
 * Expense Form 
 * @param {string} date 
 * @param {string} description 
 * @param {number} price 
 * @returns HTML code for an Expense Form
 */

function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({
        description: "",
        date: "",
        price: "",
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
            description: userInput.description,
            price: userInput.price,
            date: new Date(userInput.date)
        };

        props.onSaveExpenseData(newItem);

        setUserInput({
            description: "",
            price: "",
            date: ""
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' name='description' value={userInput.description} onChange={handleInput}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor='date'>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' id='date' name='date' value={userInput.date} onChange={handleInput}></input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor='price'>Price</label>
                    <input type='number' min='0' step='0.01' id='price' name='price' value={userInput.price} onChange={handleInput}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Submit</button>  
            </div>
        </form>
    );
}

export default ExpenseForm;