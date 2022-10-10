import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function NewItemForm() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Item Name/Code"
          multiline
          maxRows={4}
          defaultValue="CNMG120408-WSM20S"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Brand"
          defaultValue="Walter"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Brief Description"
          placeholder="Optional"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Stock Qty"
          defaultValue="10"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Min Stock Qty"
          defaultValue="5"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Location Box No"
          defaultValue="225"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Supplier/Purchaser Email"
          defaultValue="email@gmail.com"
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Suitable materials"
          onChange={handleChange}
        >
          <MenuItem sx={{".MuiMenuItem-gutters": {
            backgroundColor: "white !important"
          } }} >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox/>}
                label="Label"
              />
            </FormGroup>
          </MenuItem>
        </TextField>
      </div>

      <Button
        fullWidth="true"
        variant="outlined"
        sx={{
          backgroundColor: "red",
          color: "white",
          "&:hover": {
            backgroundColor: "#f17f8d",
          },
          outline: "none",
        }}
      >
        <h3>Add Item</h3>
      </Button>
    </Box>
  );
}
