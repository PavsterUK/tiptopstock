import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./NewItemForm.module.css";

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
      <div className={styles.inputTabs}>
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
          id="outlined-multiline-flexible"
          label="Vendor"
          defaultValue="RotaVal Internal"
        />

        <TextField select label="Suitable materials" onChange={handleChange}>
          <div className={styles.blue}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="P (Mild Steel)"
                />
              </FormGroup>
            </MenuItem>
          </div>

          <div className={styles.yellow}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="M (Stainless St.)"
                />
              </FormGroup>
            </MenuItem>
          </div>
          <div className={styles.red}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="K (Cast Iron)"
                />
              </FormGroup>
            </MenuItem>
          </div>
          <div className={styles.green}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="N (Aluminium)"
                />
              </FormGroup>
            </MenuItem>
          </div>
          <div className={styles.orange}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="S (SuperAlloys)"
                />
              </FormGroup>
            </MenuItem>
          </div>
          <div className={styles.grey}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={<Checkbox sx={{ color: "white" }} />}
                  label="H (Hard Iron/Steel)"
                />
              </FormGroup>
            </MenuItem>
          </div>
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
