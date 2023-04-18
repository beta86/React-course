import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div
          className={styles.chartBarFill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartBarLabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
