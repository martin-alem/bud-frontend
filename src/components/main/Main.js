import React from "react";
import "./Main.css";
import DateSelector from "./../date_picker/DatePicker";
import BarChart from "../bar_chart/BarChart";

function Main() {
  return (
    <div className="Main">
      <DateSelector />
      <div className="Main-chart">
        <div className="Main-bar-chart">
          <BarChart />
        </div>
        <div className="Main-pie-chart">
          <h1>Pie Chart</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
