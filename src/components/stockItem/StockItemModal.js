import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./StockItemModal.module.css";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  hr: {
    width: "100%",
  },
};

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#E3001B",
      contrastText: "#fff",
    },
  },
});

const StockItemModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.container}>
      <Button sx={{width: '100%'}} onClick={handleOpen}>{<h3 style={{ margin: "0", color: '#2F4858' }}>{props.name}</h3>}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>CNMG120408-WSM20S</h1>
          <h2>Walter</h2>
          <div className={styles.materials}>
            <div style={{ backgroundColor: "#4287f5" }}>P</div>
            <div style={{ backgroundColor: "#f5e342" }}>M</div>
            <div style={{ backgroundColor: "#c71e1e" }}>K</div>
            <div style={{ backgroundColor: "#1ec759" }}>N</div>
            <div style={{ backgroundColor: "#db7b04" }}>S</div>
            <div style={{ backgroundColor: "#8f9093" }}>H</div>
          </div>
          <hr />
          <h2>Items Currently in Stock: 8</h2>
          <p>Minimum stock qty: 5</p>
          <h2>Location No: 7</h2>
          <hr />
          <div style={{ display: "flex" }}>
            <h2 style={{ marginRight: "1em" }}>Qty To Be Taken:</h2>
            <input
              type="number"
              placeholder="0"
              style={{ fontSize: "2rem", width: "4rem" }}
            />
          </div>

          <ThemeProvider theme={theme}>
            <Button
              size="large"
              color="neutral"
              variant="contained"
              onClick={handleOpen}
              sx={{
                marginTop: "1em",
                borderRadius: "15px",
                width: "50%",
                "&:hover": {
                  backgroundColor: "#EE6676",
                },
              }}
            >
              <p style={{ fontSize: "1.5rem" }}>TAKE</p>
            </Button>
          </ThemeProvider>
        </Box>
      </Modal>
    </div>
  );
};

export default StockItemModal;
