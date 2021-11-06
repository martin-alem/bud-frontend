import React from "react";
import "./Main.css";
import DateSelector from "./../date_picker/DatePicker";
import BarChart from "../bar_chart/BarChart";
import PieChart from "../pie_chart/PieChart";
import AddBudgetModal from "../modal/Modal";

function Main() {
  return (
    <div className="Main">
      <DateSelector />
      <div className="Main-chart">
        <div className="Main-bar-chart">
          <BarChart />
        </div>
        <div className="Main-pie-chart">
          <div className="Main-pie">
            <PieChart />
          </div>

          <div className="Main-details">
            <div className="Main-income">
              <div className="Main-income-label"></div>
              <p>$ 40,000</p>
            </div>
            <div className="Main-expenditure">
              <div className="Main-expenditure-label"></div>
              <p>$ 10,000</p>
            </div>
            <div className="Main-saving">
              <div className="Main-saving-label"></div>
              <p>$ 3000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-add">
        <AddBudgetModal />
      </div>

      <div className="Main-expense">

        {/* 1. create a card component

        2. render the card here

        3. make this container a grid with 2 columns */}

      </div>
    </div>
  );
}

export default Main;
