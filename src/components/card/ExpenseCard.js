import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Edit, Delete } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

function ExpenseCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h1" component="h1">
          $ 150,000
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="h3" component="h3">
              Rent
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Grid container spacing={1} sx={{ justifyContent: "flex-end" }}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                <Edit sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ maxWidth: "fit-content !important" }}>
                <Delete sx={{ fontSize: "2.5rem", cursor: "pointer" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ExpenseCard;
