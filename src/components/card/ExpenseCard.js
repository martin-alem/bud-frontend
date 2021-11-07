import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Edit, Delete, Close } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {stringToColor} from "./../../util/utility";

function ExpenseCard(props) {
  const [editMode, setEditMode] = React.useState(false);
  const { id, amount, category } = props["expense"];
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const cardColor = stringToColor(category)
  return (
    <Card sx={{ minWidth: 275, backgroundColor: cardColor, color: "white" }}>
      <CardContent>
        {!editMode ? (
          <>
            <Typography variant="h2" component="h2" sx={{ fontWeight: "bolder" }}>
              $ {amount.toString().padEnd(amount.toString().length + 3, ".00")}
            </Typography>
          </>
        ) : (
          <>
            <TextField id="outlined-basic" label="Edit Amount" variant="outlined" sx={{ width: "100%" }} />
          </>
        )}
      </CardContent>
      <CardActions>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h4" component="h4" sx={{ textTransform: "capitalize" }}>
              {category}
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
                    <Delete sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                    <Close onClick={handleEditMode} sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
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

export default ExpenseCard;
