import React from "react";
import MovieCard from "../../shared/MovieCard/MovieCard";
import { Grid } from "@mui/material";
export const MovieData = (props) => {
  console.log(props);
  const { data = [] } = props;

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
          {!!data.length &&
            data.map((movie, index) => (
              <>
                <MovieCard
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                  id={movie.imdbID}
                  type={movie.Type}
                />
              </>
            ))}
        </Grid>
      </Grid>
    </>
  );
};
