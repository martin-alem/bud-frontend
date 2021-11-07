import React from "react";
import "./Main.css";
import Grid from "@mui/material/Grid";
import DateSelector from "./../date_picker/DatePicker";
import BarChart from "../bar_chart/BarChart";
import PieChart from "../pie_chart/PieChart";
import AddBudgetModal from "../modal/Modal";
import ExpenseCard from "../card/ExpenseCard";

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
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "center" }}>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
          <Grid item>
            <ExpenseCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Main;
