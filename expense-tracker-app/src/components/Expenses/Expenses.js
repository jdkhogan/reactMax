import React from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../Card';

import './Expenses.css';


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
      <ExpensesChart items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
