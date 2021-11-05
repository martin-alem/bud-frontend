import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectCategoryInput() {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Expense Category</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Expense Category" onChange={handleChange}>
          <MenuItem value="food">Food</MenuItem>
          <MenuItem value="rent">Rent</MenuItem>
          <MenuItem value="utilities">Utilities</MenuItem>
          <MenuItem value="cloths">Cloths</MenuItem>
          <MenuItem value="transportation">Transportation</MenuItem>
          <MenuItem value="insurance">Insurance</MenuItem>
          <MenuItem value="medical">Medical</MenuItem>
          <MenuItem value="investment">Investment</MenuItem>
          <MenuItem value="loans">Loans</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectCategoryInput;
