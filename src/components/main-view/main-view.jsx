import { MovieView } from "../movie-view/movie-view.jsx";
import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { MovieCard } from "../movie-card/movie-card.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [token, setToken] = useState(storedToken? storedToken : null);

  

    useEffect(() => {
        if (!token) {
            return;
          }
        fetch ("https://og-oyin.onrender.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => response.json())
          .then((data) => {
            console.log("movies from api:", data);
            const moviesFromApi = data.map((movie) => {
                return {
                    _id: movie._id,
                    Title: movie.Title,
                    ImagePath: movie.ImagePath,
                    Director:  movie.Director.Name,
                    Description: movie.Description,
                    Genre: movie.Genre.Name
                };
            });

            setMovies(moviesFromApi);
          });
    }, [token]);

    return(
    <Row className="justify-content-md-center"> 
        {!user ? (
          <>
            <Col md={5}>
              <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
            </Col>
          </>
        ) : selectedMovie ? (
          <Col md={8} style={{ border: "1px solid black" }}>
          <MovieView 
            style={{ border: "1px solid green" }}
            movie={selectedMovie} 
            onBackClick={() => setSelectedMovie(null)} 
          />
          </Col>
        ) : movies.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
            {movies.map((movie) => (
              <Col className="mb-5"key={movie.id} md={3}>
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
              </Col>
            ))}
          </>
        )}
      </Row>
        );
      }

    if (selectedMovie) {
        return (
          <Col md={8} style={{ border: "1px solid black" }}>
          <MovieView
            style={{ border: "1px solid green" }}
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
             {movies.map((movie) => (
            <Col ClassName="mb-5" key={movie.id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
             <button onClick={() => { setUser(null); setToken(null);localStorage.clear(); }}>Logout</button>

       </div>
    ); 

    