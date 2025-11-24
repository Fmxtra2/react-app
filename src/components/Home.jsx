import React, { useState, useEffect } from "react";
import "./Home.css";

// https://api.themoviedb.org/3/movie/now_playing?api_key=4ec5d6dd06dc8d5bdbb73e39826e945b //

const HomeList = () => {
  // state variable
  //do this after fetching the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //this is a custom function that will get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4ec5d6dd06dc8d5bdbb73e39826e945b"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="home_grid">
      {movies.map((movie) => (
        //console.log(candy.descrip);//
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
