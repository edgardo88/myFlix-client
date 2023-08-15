import { MovieView } from "../movie-view/movie-view.jsx";
import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
                    ImagePath: movie.ImageURL,
                    Director:  movie.Director.Name,
                    Description: movie.Description,
                    Genre: movie.Genre.Name
                    
                };
            });

            setMovies(moviesFromApi);
          });
    }, [token]);

    if (!user) {
        return (
          <>
            <Col md={5}>
              <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
            </Col>
          </>
        );
      }

    if (selectedMovie) {
        return (
          <Row className="justify-content-md-center">
          <Col  ClassName="mb-5 " md={3} style={{ border: "1px solid black" }}>
          <MovieView
            style={{ border: "1px solid green" }}
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
        </Row>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
              <Row  className="justify-content-md-center">
            <Col ClassName="mb-5" key={movie.id} md={3}>
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
               />  
            </Col>
            </Row>
            ))}
             <button onClick={() => { setUser(null); setToken(null);localStorage.clear(); }}>Logout</button>

       </div>
    ); 
};
    

    