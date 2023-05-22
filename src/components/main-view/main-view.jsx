import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=star+wars")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            Title: movie.Title,
            ImageURL:movie.ImageURL,
            Description: movie.Description,
            Genre: movie.Genre,
            Director:movie.Director
          };
        });

        setMovies(moviesFromApi);
      });
  }, []);

  //a way to identify whether there was a user click (on a movie) or not
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
    );
  };
    