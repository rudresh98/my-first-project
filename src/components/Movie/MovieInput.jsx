import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
const MovieInput = () => {
  const [movieName, setMovieName] = useState("");
  const movieChangeHandler = (event) => {
    console.log(event.target.value);
    setMovieName(event.target.value);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"1rem"}
      >
        <Grid item xs={12} lg={6} md={6}>
          <TextField
            value={movieName}
            placeholder="enter movie name"
            fullWidth
            id="outlined-basic"
            label="movie"
            variant="outlined"
            onChange={movieChangeHandler}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MovieInput;
