// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '10%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '50vw',
//   bgcolor: 'background.paper',
//   borderRadius: '10px',
//   boxShadow: 24,
//   p: 4,
// };

// const StockItemModal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style} >
//           <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
//             CNMG120408-WSM20S
//           </Typography>
//           <hr/>
//           <Typography textAlign="center" id="modal-modal-description" sx={{ mt: 2 }}>
//             Turning insert
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default StockItemModal;

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
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

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button size='large'  color="neutral" variant="contained" onClick={handleOpen}>
         GET
        </Button>
      </ThemeProvider>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box textAlign="center" sx={{ ...style, width: "40vw" }}>
          <div>
            <h3 id="child-modal-description">ITEMS CURRENTLY IN STOCK - 8</h3>
          </div>

          <h2 id="child-modal-title">QTY TO TAKE</h2>
          <input placeholder="0" min="1" type="number"></input>
          <ThemeProvider theme={theme}>
            <Button size='large'  color="neutral" variant="contained" onClick={handleClose}>
              TAKE
            </Button>
          </ThemeProvider>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function StockItemModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "50vw" }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
