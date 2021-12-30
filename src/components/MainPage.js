import React, { useState } from "react";
import DialogComponent from "./DialogComponent/DialogComponent";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const myStyle = {
    height: "100vh",
    justifyContent: "center",
    whiteSpace: "pre-line",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: "12vmin",
  };

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="App">
      <AppBar
        position="absolute"
        style={{ background: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            fontWeight="fontWeightMedium"
            sx={{ fontSize: "calc(10px + 1.5vmin)" }}
          >
            <Link to="/" style={{ color: "#D093C3", textDecoration: "none" }}>
              insomnia.
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={myStyle}>
        <Typography
          sx={{ fontSize: "calc(10px + 13vmin)" }}
          color="primary"
          fontWeight="fontWeightLight"
        >
          insomnia.
        </Typography>
        <Typography
          color="secondary"
          fontWeight="fontWeightMedium"
          style={{ fontSize: "calc(10px + 1.3vmin)" }}
        >
          hi, welcome to insomnia! Built using React, insomnia will help you
          relax and sleep better.
          <br />
          Click below to browse.
        </Typography>
        <div>
          <Button
            variant="contained"
            onClick={handleClick}
            color="primary"
            style={{
              marginTop: "5vmin",
              fontSize: "calc(10px + 1.5vmin)",
              padding: "3px 25px",
            }}
          >
            click here
          </Button>
        </div>
      </div>
      <DialogComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={{ borderColor: "red" }}
      />
    </div>
  );
}
