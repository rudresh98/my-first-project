import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
export const MovieFilter = (props) => {
  const onFilterChangeHandler = (event) => {
    // console.log(event.target.value);
    const { target: { value = "" } = {} } = event;
    props.onMovieFilterHandler(value);
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
        <Grid item>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Search Category
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={onFilterChangeHandler}
              defaultValue={"movie"}
            >
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="Movie"
              />
              <FormControlLabel
                value="series"
                control={<Radio />}
                label="Series"
              />
              <FormControlLabel
                value="episode"
                control={<Radio />}
                label="Episode"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

MovieFilter.propTypes = {
  onMovieFilterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
