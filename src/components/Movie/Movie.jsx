import React, { useState } from "react";
import MovieInput from "./MovieInput";
// import { MovieFilter } from "./MovieFilter";
import { MovieData } from "./MovieData";
import { moviesearch } from "../../api/MovieApi.js";
const Movie = () => {
  const [mData, setmData] = useState([]);
  const movieSearchValue = async (movieName = "") => {
    if (movieName && movieName.length > 4) {
      const movieData = await moviesearch(movieName);
      console.log({ movieData });
      const { Search: movieSearchData = [] } = movieData;
      setmData(movieSearchData);
    }
  };
  return (
    <>
      <MovieInput movieSearchValue={movieSearchValue} />
      {/* <MovieFilter /> */}
      {!!mData.length && <MovieData data={mData} />}
      {!mData.length && (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No movie found
        </p>
      )}
    </>
  );
};
export default Movie;
