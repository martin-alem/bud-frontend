import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart() {
  return (
    <div className="PieChart">
      <Pie
        data={{
          labels: ["Income", "Expenditure", "Savings"],
          datasets: [
            {
              label: "Budget Summary for November, 2021",
              data: [300, 50, 100],
              backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 205, 86)"],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
}

export default PieChart;
