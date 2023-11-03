import React, { useState } from "react";
import MovieInput from "./MovieInput";
import { MovieFilter } from "./MovieFilter";
import { MovieData } from "./MovieData";
import { moviesearch } from "../../api/MovieApi.js";
const Movie = () => {
  const [mData, setmData] = useState([]);
  const getMovieData = async () => {
    const movieData = await moviesearch();
    console.log(movieData);
    const { Search = [] } = movieData;
    setmData(Search);
  };
  return (
    <>
      <button onClick={getMovieData}> fetch data</button>
      <MovieInput />
      <MovieFilter />
      <MovieData data={mData} />
    </>
  );
};
export default Movie;
