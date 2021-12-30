import React, { useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import GridOuter from "./Grid/Grid";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

function DialogComponent({ isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      scroll="paper"
      width="500px"
      maxWidth="100%"
      sx={{ opacity: "0.92" }}
    >
      <Box
        spacing={3}
        sx={{ backgroundColor: "black", padding: "1vmin", display: "flex" }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#D093C3",
            fontFamily: "poppins",
            fontWeight: "200",
            flex: "1",
          }}
        >
          Select your sound
        </Typography>
        <Button
          sx={{ fontSize: "calc(5px + 1.5vmin)", padding: "-3px -25px" }}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          esc
        </Button>
      </Box>
      <DialogContent dividers={true}>
        <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
          <GridOuter setIsOpen={setIsOpen} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
