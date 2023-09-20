import React from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../Card';

function Expenses({items}) {
  const [filteredYear, setFilteredYear] = React.useState();
  
  const expenseItems = items.map((expense, i) => 
    <ExpenseItem key={i} description={expense.title} price={expense.amount} date={expense.date} />
  );
  
  const filteredYearHandler = (filter) => {
    console.log(filter);
    setFilteredYear(filter);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={filteredYearHandler} />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
