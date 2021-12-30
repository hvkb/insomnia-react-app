import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
const GridItem = ({ music, setIsOpen }) => {
  const navigate = useNavigate();

  const openCard = () => {
    setIsOpen(false);
    navigate(`/openCard/${music.id}`, { replace: true });

  };

  return (
    <Card sx={{ background: "none" }}>
      <CardActionArea onClick={openCard}>
        <CardMedia
          component="img"
          height="150"
          image={music.image}
          alt=":/"
        />
        <CardContent sx={{ height: "60px", backgroundColor: "#0c0b0b" }}>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#fff", fontFamily: "Poppins", fontWeight: "300" }}
          >
            {music.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GridItem;
