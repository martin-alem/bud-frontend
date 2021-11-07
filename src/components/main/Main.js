import React from "react";
import "./Main.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Grid from "@mui/material/Grid";
import BarChart from "../bar_chart/BarChart";
import PieChart from "../pie_chart/PieChart";
import AddBudgetModal from "../modal/Modal";
import ExpenseCard from "../card/ExpenseCard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Main() {
  const [budget, setBudget] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const fetchBudget = async () => {
      setFetching(true);
      window
        .fetch("https://bud-backendapi.herokuapp.com/budgets", { method: "GET" })
        .then((response) => {
          if (response.ok) {
            response
              .json()
              .then((data) => {
                setFetching(false);
                setBudget(data);
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
          }
        })
        .catch((error) => {
          setFetching(false);
          console.error(error);
        });
    };

    fetchBudget();
  }, []);
  return fetching ? (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={fetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ) : (
    <div className="Main">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Pick Date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} sx={{ margin: "1rem" }} />}
        />
      </LocalizationProvider>
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
        <AddBudgetModal setBudget={setBudget} />
      </div>

      <div className="Main-expense">
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: "flex-start" }}>
          {budget.map((expense) => {
            if (expense.budget_type.toLowerCase() === "expense") {
              return (
                <Grid key={expense["id"]} item>
                  <ExpenseCard expense={expense} setBudget={setBudget} budget={budget} />
                </Grid>
              );
            } else
            {
              return []
            }
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Main;
