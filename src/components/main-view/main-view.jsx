import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";
import { LoginView } from "../login-view/login-view.jsx";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch ("https://og-oyin.onrender.com/movies")
          .then((response) => response.json())
          .then((data) => {
            console.log("movies from api:", data);
            const moviesFromApi = data.map((movie) => {
                return {
                    _id: movie._id,
                    Title: movie.Title,
                    ImagePath: movie.ImagePath,
                    Director: {
                        Name: movie.Director.Name,
                        Bio: movie.Director.Bio,
                        Birth: movie.Director.Birth,
                        Death: movie.Director.Death
                    },
                    Description: movie.Description,
                    Genre: movie.Genre.Name
                };
            });

            setMovies(moviesFromApi);
          });
    }, []);

    if (!user) {
        return <LoginView />;
      }

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
               />  
            ))}
       </div>
    ); 
};
    