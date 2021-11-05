import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import DateSelector from "../date_picker/DatePicker";
import TextField from "@mui/material/TextField";
import SelectInput from "../select_input/SelectInput";
import SelectCategoryInput from "../select_category_input/SelectCategoryInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddBudgetModal() {
  const [open, setOpen] = React.useState(false);
  const [budgetType, setBudgetType] = React.useState("income");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} startIcon={<AddIcon />}>
        Add Budget
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
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
            <DateSelector />
            <SelectInput setBudgetType={setBudgetType} />
            {budgetType === "income" ? <TextField id="standard-basic" label="Income Category" variant="outlined" /> : <SelectCategoryInput />}
            <TextField id="standard-basic" label="Amount" variant="outlined" />
            <TextField id="standard-basic" label="Description" variant="outlined" />
            <Button variant="contained" sx={{ backgroundColor: "#7269ef", ":hover": { backgroundColor: "#7269ea" }, fontWeight: "bolder" }} startIcon={<AddIcon />}>
              Add Budget
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddBudgetModal;
