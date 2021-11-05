import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectInput({ setBudgetType }) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setBudgetType(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Budget Type</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Budget Type" onChange={handleChange}>
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expenditure">Expenditure</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectInput;

// <MenuItem value="food">Food</MenuItem>
// <MenuItem value="rent">Rent</MenuItem>
// <MenuItem value="utilities">Utilities</MenuItem>
// <MenuItem value="cloths">Cloths</MenuItem>
// <MenuItem value="transportation">Transportation</MenuItem>
// <MenuItem value="insurance">Insurance</MenuItem>
// <MenuItem value="medical">Medical</MenuItem>
// <MenuItem value="investment">Investment</MenuItem>
// <MenuItem value="loans">Loans</MenuItem>
// <MenuItem value="other">Other</MenuItem>
