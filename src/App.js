import React, { useState } from 'react';


import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


 const initialExpenses = [
   {
     id: "e1",
     title: "Toiler Paper",
     amount: 94.12,
     date: new Date(2020, 7, 14),
   },
   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
   },
   {
     id: "e4",
     title: "Car Insurance",
     amount: 450,
     date: new Date(2021, 5, 12),
   },
 ];

function App() {
  const [enteredData, setEnteredData] = useState(initialExpenses);

  const enteredExpenses = (expenseData) => {
    if (expenseData.title !== '' && expenseData.amount !== '') {
      setEnteredData(pre => {
         return pre = [expenseData, ...pre];
       })
    };
 
    
  }

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <NewExpense onExpenses={enteredExpenses} />
      <Expenses expenses={enteredData} />
    </div>
  );
}

export default App;
