import React from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Credits = ({ music, anchorElInfo, setAnchorElInfo }) => {
  const openMenuInfo = Boolean(anchorElInfo);
  const handleCloseInfo = () => {
    setAnchorElInfo(null);
  };
  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorElInfo}
      open={openMenuInfo}
      onClose={handleCloseInfo}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      style={{
        opacity: 0.6,
      }}
    >
      <Box style={{ padding: "1vmin", width: "100%" }}>
        <Typography variant="h6" align="center">
          Credits
        </Typography>
        <Typography fontWeight="fontWeightMedium">
          bgm:{" "}
          <a target="_blank" without rel="noreferrer" href={music.youtube} style={{ color: "#D093C3" }}>
            {music.title}
          </a>
          <br />
          bg image:{" "}
          <a
            target="_blank"
            without rel="noreferrer"
            href={music.imageCredit}
            style={{ color: "#D093C3" }}
          >
            source
          </a>
        </Typography>
      </Box>
    </Menu>
  );
};
