import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm(props) {
  // Title
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleOnChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  // Amount
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountOnChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  // Date
  const [enteredDate, setEnteredDate] = useState("");
  const dateOnChange = (e) => {
    setEnteredDate(e.target.value);
  };

  // form submit
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleOnChange} />
        </div>
      </div>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amountOnChange}
          />
        </div>
      </div>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateOnChange}
          />
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
