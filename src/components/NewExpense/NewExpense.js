import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);
  const showFormOnClick = () => setShowForm(true);
  const closeFormOnClick = () => setShowForm(false);

  return (
    <div className={styles.newExpense}>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelOnClick={closeFormOnClick}
        />
      ) : (
        <div>
          <button onClick={showFormOnClick}>Add new item </button>
        </div>
      )}
    </div>
  );
}
