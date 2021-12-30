import React from "react";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import LightsStatus from "./LightsStatus";
import MenuItem from "@mui/material/MenuItem";

const LightSettingsMenu = ({anchorEl, setAnchorEl, setLightsStatus}) => {
  const openMenu = Boolean(anchorEl);

  const handleSetLightsToLightsOn = () => {
    setLightsStatus(LightsStatus.lightsOn);
    handleClose();
  };

  const handleSetLightsToLightsOff = () => {
    setLightsStatus(LightsStatus.lightsOff);
    handleClose();
  };

  const handleSetToLightsGraduallyOff = () => {
    setLightsStatus(LightsStatus.lightsGraduallyOff);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
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
        <MenuItem onClick={handleSetLightsToLightsOn}>
        <Typography fontWeight="fontWeightMedium">lights on</Typography>
        </MenuItem>
        <MenuItem onClick={handleSetLightsToLightsOff}>
        <Typography fontWeight="fontWeightMedium">lights off</Typography>
        </MenuItem>
        <MenuItem onClick={handleSetToLightsGraduallyOff}>
        <Typography fontWeight="fontWeightMedium">lights gradually off - default</Typography>
        </MenuItem>
      </Menu>
    )
}

export default LightSettingsMenu
