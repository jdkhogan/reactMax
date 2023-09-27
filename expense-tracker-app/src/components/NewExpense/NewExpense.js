import {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import Card from '../Card';
import './NewExpense.css';


function NewExpense(props) {
    const [formToggle, setFormToggle] = useState(false);
    
    const showForm = () => setFormToggle(true);
    const hideForm = () => setFormToggle(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        
        hideForm();
    };
    
    return (
        <div className='new-expense'>
            {formToggle 
                ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm} /> 
                : <button onClick={showForm}>Add New Expense</button>
            }

            
        </div>
    );
}

export default NewExpense;