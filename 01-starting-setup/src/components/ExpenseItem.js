import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

/**
 * Expense Item 
 * @param {string} date 
 * @param {string} description 
 * @param {number} price 
 * @returns HTML code for an Expense Item
 */

function ExpenseItem({description, price, date}) {
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{description}</h2>
                <div className="expense-item__price">${price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;