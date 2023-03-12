import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  
  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpense = props.expenseValues.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    }
  );

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
}

export default Expenses;
