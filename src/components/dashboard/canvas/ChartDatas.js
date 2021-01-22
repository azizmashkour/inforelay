import React from 'react';
import Chart from './Chart';

const ChartDatas = () => (
  <Chart
    backgroundColor="rgb(255, 99, 132, 0.5)"
    color="rgb(54, 162, 235)"
    data={[1, 2, 4, 5, 6, 7, 7, 8, 9, 0]}
    fill={false}
    label="Actual Data"
    steppedLine={false}
    stepSize={2}
  />
);

export default ChartDatas;
