import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
const Movie = () => {
  const [movieName, setMovieName] = useState("");
  const [dummyData, setDummyData] = useState([]);
  const movieChangeHandler = (event) => {
    console.log(event.target.value);
    setMovieName(event.target.value);
  };
  const fetchDummyData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setDummyData(data?.products);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    console.debug("useeffect");
    fetchDummyData();
  }, []);

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
      <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"1rem"}
      >
        {!dummyData.length && (
          <Grid item xs={12} lg={6} md={6}>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={"100%"}
              height={"5px"}
            />
          </Grid>
        )}
        {!!dummyData.length && (
          <Grid item xs={12} lg={6} md={6}>
            {dummyData.map((item) => (
              <div key={item.id}>
                <h1>thumbnail</h1>
                <img src={item.thumbnail} alt={item.brand} />
                <hr />
                <p>{item.title}</p>
                <h2>Images</h2>
                {item.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={image} />
                  </div>
                ))}
              </div>
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Movie;
