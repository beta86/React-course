import styles from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  
  
  
  
  
  
  return (
    <div className={styles.newExpense}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
