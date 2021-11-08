import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  return (
    <div className="BarChart">
      <Bar
        data={{
          labels: ["Food", "Rent", "Transportation", "Utilities", "Cloths", "Insurance", "Medical", "Investment", "Loans", "Other"],
          datasets: [
            {
              label: "Expenditure for November, 2021",
              data: [100, 300, 400, 5000, 600, 1300, 130.45, 6700, 900, 230.56],
              backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        width={100}
        height={100}
        options={{
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
