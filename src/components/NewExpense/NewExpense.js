import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => { 
  const [addExp, setAddExp] = useState(false);

  const addExpHandler = () => {
    setAddExp(true);
  }
    return (
      <div className="new-expense">
        {addExp &&
          <ExpenseForm
          onExpenses={props.onExpenses}
          onSetAddExp={setAddExp}
          />
        }
        {!addExp &&
          (
            <button onClick={addExpHandler} className="btn" type="submit">
              Add New Expense
            </button>
          )
        }
      </div>
    );
 }

export default NewExpense;