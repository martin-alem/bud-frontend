import React from "react";
import "./Main.css";
import DateSelector from "./../date_picker/DatePicker";
import BarChart from "../bar_chart/BarChart";
import PieChart from "../pie_chart/PieChart";

function Main() {
  return (
    <div className="Main">
      <DateSelector />
      <div className="Main-chart">
        <div className="Main-bar-chart">
          <BarChart />
        </div>
        <div className="Main-pie-chart">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Main;
