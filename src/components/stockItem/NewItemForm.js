import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      </div>
    </Box>
  );
}
