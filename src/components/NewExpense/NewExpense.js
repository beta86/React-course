import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense() {
  return <div className={styles.newExpense}>
    <ExpenseForm />
  </div>;
}
