import { MovieView } from "../movie-view/movie-view.jsx";
import { useState, useEffect } from "react";
import { LoginView } from "../login-view/login-view.jsx";
import { SignupView } from "../signup-view/signup-view.jsx";
import { MovieCard } from "../movie-card/movie-card.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "./navigation-bar/navigation-bar.jsx";
import { ProfileView } from "../profile-view/profile-view.jsx";
import { SearchBar } from "../search-bar/search-bar.jsx"; // Import the SearchBar component

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user._id"));
    console.log("user");
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser : null);
    //const [selectedMovie, setSelectedMovie] = useState(null);
    const [token, setToken] = useState(storedToken? storedToken : null);
    const [filteredMovies, setFilteredMovies] = useState([]); // State to hold the filtered movies

    const updateUser = (user) => {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
   };
   
  

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
                    Director:  {
                      Name: movie.Director.Name,
                    },
                    Description: movie.Description,
                    Genre: {
                      Name: movie.Genre.Name,
                      Description: movie.Genre.Description
                    },
                };
            });

            setMovies(moviesFromApi);
          });
    }, [token]);

    // Define the onBackClick function in the MainView component
  const handleBackClick = () => {};

  // Function to update the filtered movies when the user searches
  const handleMovieSearch = (filteredMovies) => {
    setFilteredMovies(filteredMovies);
  };

    return (
      <BrowserRouter>
      <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <SignupView />
                    </Col>
                  )}
                </>
  
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <LoginView
                          onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }}
                         />
                        
                    </Col>
                  )}
                </>
  
              }
            />

<Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      token={token}
                      setUser={setUser}
                      updateUser={updateUser}
                      movies={movies}
                      onLoggedOut={() => {
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                    }}
                    
                    />
                  </Col>
                )}
              </>
            }
          />
            
            
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView movies={movies}
                       user={user}
                      token={token}
                      setUser={setUser}
                      onBackClick={handleBackClick} // Pass the callback function as a prop
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>This list is empty!</Col>
                ) : (
                  <>
                    {/* Add the SearchBar component */}
                    <Col className="mb-4" md={12}>
                      <SearchBar
                        movies={movies}
                        handleMovieSearch={handleMovieSearch} // Pass the callback function
                      />
                    </Col>
                    {filteredMovies.length === 0 ? (
                      movies.map((movie) => (
                        <Col className="mb-4" key={movie._id} md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))
                    ) : (
                      // Render the filtered movies
                      <>
                        {filteredMovies.map((movie) => (
                          <Col className="mb-4" key={movie._id} md={3}>
                            <MovieCard movie={movie} />
                          </Col>
                        ))}
                      </>
                    )}
                  </>
                )}
              </>
            }
          />
          </Routes>
        </Row>
      </BrowserRouter>
    );
  };    
    
    