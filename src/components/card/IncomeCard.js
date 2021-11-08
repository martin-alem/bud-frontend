import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Edit, Delete, Check } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function IncomeCard(props) {
  const [editMode, setEditMode] = React.useState(false);
  const [newAmount, setAmount] = React.useState("");
  const [income, setIncome] = React.useState(props.income);
  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = () => {
    if (newAmount !== "" || !isNaN(parseFloat(newAmount))) {
      const data = { amount: parseFloat(newAmount) };
      window
        .fetch(`https://bud-backendapi.herokuapp.com/budgets/${income.id}`, { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
        .then((response) => {
          response
            .json()
            .then(() => {
              setIncome((prevState) => {
                return { ...prevState, amount: newAmount };
              });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Invalid amount");
    }
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    window
      .fetch(`https://bud-backendapi.herokuapp.com/budgets/${income.id}`, { method: "DELETE", headers: { Accept: "application/json" } })
      .then((response) => {
        if (response.ok && response.status === 204) {
          const newBudget = props.budget.filter((b) => b.id !== income.id);
          props.setBudget(newBudget);
        } else {
          console.error("error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const options = { style: "currency", currency: "USD" };
  const numberFormat = new Intl.NumberFormat("en-US", options);
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "rgb(54, 162, 235)", color: "white" }}>
      <CardContent>
        {!editMode ? (
          <>
            <Typography variant="h2" component="h2" sx={{ fontWeight: "bolder" }}>
              +{numberFormat.format(income.amount)}
            </Typography>
          </>
        ) : (
          <>
            <TextField value={newAmount} onChange={handleAmountChange} id="outlined-basic" label="Edit Amount" variant="outlined" sx={{ width: "100%" }} />
          </>
        )}
      </CardContent>
      <CardActions>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4" component="h4" sx={{ textTransform: "capitalize" }}>
              {income.category}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid container spacing={1} sx={{ justifyContent: "flex-end" }}>
              {!editMode ? (
                <>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                    <Edit sx={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={handleEditMode} />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                    <Delete sx={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={handleDelete} />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                    <Check onClick={handleSubmit} sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default IncomeCard;
