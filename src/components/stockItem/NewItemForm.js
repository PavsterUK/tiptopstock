import * as React from "react";
import { useReducer } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./NewItemForm.module.css";

const checkedMaterials = {
  p: false,
  m: false,
  k: false,
  n: false,
  s: false,
  h: false,
};

const itemData = {
  itemName: "CNMG120408-WSM20S",
  itemBrand: "Walter",
  description: "Brief Description",
  currentQty: 10,
  minQty: 5,
  itemLocation: "Box No_1",
  purchaserEmail: "lalala@gmail.com",
  itemVendor: "Rotaval",
  materials: checkedMaterials,
};

export default function NewItemForm() {
  const [checkedBoxes, updateCheckedBoxes] = useReducer(
    (checkedBoxes, updates) => ({ ...checkedBoxes, ...updates }),
    checkedMaterials
  );

  const [newItemData, updateItemData] = useReducer(
    (newItemData, updates) => ({ ...newItemData, ...updates }),
    itemData
  );

  console.log(newItemData);

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
          value={newItemData.itemName}
          onChange={(e) => updateItemData({ itemName: e.target.value })}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Brand"
          value={newItemData.itemBrand}
          onChange={(e) => updateItemData({ itemBrand: e.target.value })}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Brief Description"
          placeholder="Optional"
          value={newItemData.description}
          onChange={(e) => updateItemData({ description: e.target.value })}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Stock Qty"
          value={newItemData.currentQty}
          onChange={(e) => updateItemData({ currentQty: e.target.value })}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Min Stock Qty"
          value={newItemData.minQty}
          onChange={(e) => updateItemData({ minQty: e.target.value })}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Location Box No"
          value={newItemData.itemLocation}
          onChange={(e) => updateItemData({ itemLocation: e.target.value })}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Supplier/Purchaser Email"
          value={newItemData.purchaserEmail}
          onChange={(e) => updateItemData({ purchaserEmail: e.target.value })}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Vendor"
          value={newItemData.itemVendor}
          onChange={(e) => updateItemData({ itemVendor: e.target.value })}
        />

        <TextField select label="Suitable materials">
          <div className={styles.blue}>
            <MenuItem>
              <FormGroup>
                <FormControlLabel
                  sx={{ color: "white" }}
                  control={
                    <Checkbox
                      checked={checkedBoxes.p}
                      onChange={(e) => {
                        updateCheckedBoxes({ p: e.target.checked });
                        // updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
                  control={
                    <Checkbox
                      checked={checkedBoxes.m}
                      onChange={(e) => {
                        updateCheckedBoxes({ m: e.target.checked });
                        updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
                  control={
                    <Checkbox
                      checked={checkedBoxes.k}
                      onChange={(e) => {
                        updateCheckedBoxes({ k: e.target.checked });
                        updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
                  control={
                    <Checkbox
                      checked={checkedBoxes.n}
                      onChange={(e) => {
                        updateCheckedBoxes({ n: e.target.checked });
                        updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
                  control={
                    <Checkbox
                      checked={checkedBoxes.s}
                      onChange={(e) => {
                        updateCheckedBoxes({ s: e.target.checked });
                        updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
                  control={
                    <Checkbox
                      checked={checkedBoxes.h}
                      onChange={(e) => {
                        updateCheckedBoxes({ h: e.target.checked });
                        updateItemData({ materials: checkedBoxes });
                      }}
                      sx={{ color: "white" }}
                    />
                  }
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
