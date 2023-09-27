import React from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../Card';

function Expenses({items}) {
  const [filteredYear, setFilteredYear] = React.useState('2021');
  
  const filteredYearHandler = (filter) => {
    setFilteredYear(filter);
  };
  
  const filteredExpenses = items.filter( expense => expense.date.getFullYear() === parseInt(filteredYear) );

  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterYear={filteredYearHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
