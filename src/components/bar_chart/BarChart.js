import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {

  const constructData = () => {
    const data = new Array(10).fill(0);
    const freq = {};
    const expense = chartData.filter((e) => e.budget_type === "expense");
    expense.forEach((e) => {
      freq[e.category] = freq[e.category] ? freq[e.category] + e.amount : e.amount;
    });
    data[0] = freq["food"] || 0;
    data[1] = freq["rent"] || 0;
    data[2] = freq["transportation"] || 0;
    data[3] = freq["utilities"] || 0;
    data[4] = freq["cloths"] || 0;
    data[5] = freq["insurance"] || 0;
    data[6] = freq["medical"] || 0;
    data[7] = freq["investment"] || 0;
    data[8] = freq["loans"] || 0;
    data[9] = freq["other"] || 0;
    return data;
  };

  return (
    <div className="BarChart">
      <Bar
        data={{
          labels: ["Food", "Rent", "Transportation", "Utilities", "Cloths", "Insurance", "Medical", "Investment", "Loans", "Other"],
          datasets: [
            {
              label: "Expenditure for November, 2021",
              data: constructData(),
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
