import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => { 
    
    return (
      <div className="new-expense">
        <ExpenseForm onExpenses={props.onExpenses} />
      </div>
    );
 }

export default NewExpense;