import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {id:'e1', title: 'Car Insurance', amount:249.98, date: new Date(2021, 3,6)},
    {id:'e2', title: 'Car Insurance', amount:249.98, date: new Date(2021, 3,6)},
    {id:'e3', title: 'Car Insurance', amount:249.98, date: new Date(2021, 3,6)},
    {id:'e4', title: 'Car Insurance', amount:249.98, date: new Date(2021, 3,6)},
  ]



  const addExpenseHandler = expense => {
      console.log('in app.js');
      console.log(expense);
  }

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseValues={expenses}/>
    </div>
  );
}

export default App;
