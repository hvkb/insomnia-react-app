import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import GridItem from "./GridItem";
import { MusicInfoContext } from "../../../Contexts/MusicInfoContext";

const GridOuter = ({ setIsOpen }) => {
  const music = useContext(MusicInfoContext);

  return (
    <Grid container alignItems="stretch" spacing={4} >
      {music.map((music) => (
        <Grid key={music.id} xs={12} sm={6} lg={3} item>
          <GridItem music={music} setIsOpen={setIsOpen} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridOuter;
