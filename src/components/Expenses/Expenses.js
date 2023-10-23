import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";
import FilteredExpenses from "./FilteredExpenses";

import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterYear = (year) => {
    setFilteredYear((pre) => (pre = year));
  };
  const outOfRange = <h2>YOU OUT OF RANGE</h2>;

  const filteredByYear = props.expenses.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  return (
    <Card className="expenses">
      <FilteredExpenses onValue={filteredYear} onFilteredYear={filterYear} />
      <ExpenseChart expenses={filteredByYear} />
      {filteredByYear.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            amount={item.amount}
            title={item.title}
            date={item.date}
          />
        );
      })}
      {filteredByYear == 0 && outOfRange}
    </Card>
  );
};

export default Expenses;
