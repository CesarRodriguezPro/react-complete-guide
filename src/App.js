
import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

  const initialExpenses = [
    

  ]

function App() {

  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = newExpense => {
    setExpenses((prevState)=>{
      return [newExpense, ...prevState]
    });
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseValues={expenses}/>
    </div>
  );
}

export default App;
