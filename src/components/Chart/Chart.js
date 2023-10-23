import React from "react";

import ChartBars from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //Calculating Maximum value per month
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map(item => item.value);
  const maxValue = Math.max(...dataPointValues);

  console.log(maxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBars
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
          key={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
