import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""),
    [enteredAmount, setEnteredAmount] = useState(""),
    [enteredDate, setEnteredDate] = useState("");


    // One functioin to handle all three events.
    const inputChangeHandler = (identifier, value) => {
      return (identifier === "title") 
       ? setEnteredTitle(pre => (pre = value))
      :(identifier === "amount") 
       ? setEnteredAmount(pre => (pre = value))
     :setEnteredDate((pre) => (pre = value));
      
    };

    const submitHandler = (event => {
        event.preventDefault();

        const expense = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expense);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    })
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Tilte</label>
            <input
              type="text"
              onChange={(event) =>
                inputChangeHandler("title", event.target.value)
              }
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={(event) =>
                inputChangeHandler("amount", event.target.value)
              }
                        value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={(event) =>
                inputChangeHandler("date", event.target.value)
              }
                        value={enteredDate}
            />
          </div>
          <button type="submit">New Expense</button>
          {enteredAmount}
        </div>
      </form>
    );
  };


export default ExpenseForm;
