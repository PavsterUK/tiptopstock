import * as React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewItemForm from "./NewItemForm";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';


const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function AddNewItemModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
        onClick={handleOpen}
      >
        <AddIcon sx={{ marginRight: ".5em" }} />
        Add New Item
      </Typography>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseTwoToneIcon
          onClick={handleClose}
            sx={{
              position: "absolute",
              zIndex: "100",
              backgroundColor: "red !important",
              right: "0",
              top: "0",
              fontSize: "3rem",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#f17f8d !important",
              },
            }}
          />
          <NewItemForm />
        </Box>
      </Modal>
    </div>
  );
}
