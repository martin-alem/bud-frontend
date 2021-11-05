import React from "react";
import "./Main.css";
import DateSelector from "./../date_picker/DatePicker";

function Main() {
  return (
    <div className="Main">
      <DateSelector />
      <div className="Main-chart">
        <div className="Main-bar-chart">
          <h1>Bar Chart</h1>
        </div>
        <div className="Main-pie-chart">
          <h1>Pie Chart</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
