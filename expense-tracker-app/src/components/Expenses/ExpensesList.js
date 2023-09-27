import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


function ExpensesList({items}) {
    if (!items.length) return <p className='expenses-list__fallback'>No expenses found for this year</p>;

    return (
        <ul className='expenses-list'>
            {items.map(expense => 
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            )}
        </ul>
    );
}

export default ExpensesList;