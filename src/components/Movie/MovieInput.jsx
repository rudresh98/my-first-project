import React, { useCallback, useRef } from "react";
import { Grid, TextField, debounce } from "@mui/material";
import PropTypes from "prop-types";
const MovieInput = ({ movieSearchValue }) => {
  const movieSearchRef = useRef("");
  // const movieChangeHandler = useCallback(
  //   (event = {}) => {
  //     console.log(event.target.value);
  //     const { target: { value = "" } = {} } = event;
  //     console.log({ value });
  //     movieSearchValue(value);
  //   },
  //   [movieSearchValue]
  // );
  const newSearchHandler = useCallback(() => {
    const { current: { value = "" } = {} } = movieSearchRef;
    movieSearchValue(value);
  }, [movieSearchValue, movieSearchRef]);
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
            inputRef={movieSearchRef}
            placeholder="enter movie name"
            fullWidth
            id="outlined-basic"
            label="movie"
            variant="outlined"
            onChange={debounce(newSearchHandler, 100)}
          />
        </Grid>
      </Grid>
    </>
  );
};

MovieInput.propTypes = {
  movieSearchValue: PropTypes.func.isRequired,
};

export default MovieInput;
