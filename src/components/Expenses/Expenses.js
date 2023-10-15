import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
    return (
      <Card className="expenses">
        {props.expenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              amount={item.amount}
              title={item.title}
              date={item.date}
            />
          );
        })}
      </Card>
    );
}

export default Expenses;