import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "1px solid #7269ef",
  boxShadow: 24,
  p: 4,
};

function AddBudgetModal() {
  const [openModal, setOpenModal] = React.useState(false);
  const [type, setType] = React.useState("income");
  const [date, setDate] = React.useState(new Date());
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState({ active: false, type: "info", message: "" });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleTypeChange = (event) => {
    setCategory("");
    setType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    if ((category === "" || amount === "" || description === "")) {
      setError({ active: true, type: "error", message: "Provide all fields" });
    } else if (isNaN(parseFloat(amount))) {
      setError({ active: true, type: "error", message: "Amount must be a number" });
    } else {
      setError({ active: true, type: "info", message: "Success! Budget successfully saved" });
      setCategory("");
      setType(type);
      setAmount("");
      setDescription("");
    }

    setTimeout(() => setError(false), 4000);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleOpenModal} startIcon={<AddIcon />}>
        Add Budget
      </Button>
      <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          {error["active"] ? (
            <Alert severity={error["type"]}>
              <AlertTitle>{error["type"].toUpperCase()}</AlertTitle>
              <strong> {error["message"]}</strong>
            </Alert>
          ) : null}

          <Typography id="modal-modal-title" variant="h3" sx={{ textAlign: "center" }} component="div">
            Add Budget
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
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
            <Box sx={{ width: "100%" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Budget Type</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={type} label="Budget Type" onChange={handleTypeChange}>
                  <MenuItem value="income">Income</MenuItem>
                  <MenuItem value="expenditure">Expenditure</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {type === "income" ? (
              <TextField value={category} onChange={handleCategoryChange} id="standard-basic" label="Income Category" variant="outlined" />
            ) : (
              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Expense Category</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} label="Expense Category" onChange={handleCategoryChange}>
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
            )}
            <TextField value={amount} onChange={handleChangeAmount} id="standard-basic" label="Amount" variant="outlined" />
            <TextField value={description} onChange={handleChangeDescription} id="standard-basic" label="Description" variant="outlined" />
            <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: "#7269ef", ":hover": { backgroundColor: "#7269ea" }, fontWeight: "bolder" }} startIcon={<AddIcon />}>
              Add Budget
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddBudgetModal;
