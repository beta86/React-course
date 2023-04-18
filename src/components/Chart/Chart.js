import styles from "./Chart.module.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointvalues);
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
