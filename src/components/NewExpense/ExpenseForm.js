import styles from "./ExpenseForm.module.css";

export default function ExpenseForm() {
  return (
    <form>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Amount</label>
          <input type="number" min="0.1" step="0.01" />
        </div>
      </div>
      <div className={styles.newExpenseControls}>
        <div className={styles.newExpenseControl}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className={styles.newExpenseActions}>
        <button type="button">Add Expense</button>
      </div>
    </form>
  );
}
