import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses({expenses}) {
  const expenseItems = expenses.map((expense) => 
    <ExpenseItem description={expense.title} price={expense.amount} date={expense.date} />
  );

  return (
    <Card className='expenses'>{expenseItems}</Card>
  );
}

export default Expenses;
