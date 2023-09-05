import './movie-view.scss';
import {  Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import {  Button,Card } from "react-bootstrap";
import { useEffect, useState } from "react";


export const MovieView = ({ movies, user, /*token, setUser */}) => {
  const { movieId } = useParams();

  const [isFavorite, setIsFavorite] = useState(false);

  /* useEffect(() => {
    const isFavorited = user.FavoriteMovies.includes(movieId);
    setIsFavorite(isFavorited);
  });
*/
  const addFavorite = () => {
    fetch(
      `https://og-oyin.onrender.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setIsFavorite(true);
        user.Favorite.push(movieId);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
      });
  };

  const removeFavorite = () => {
    fetch(
      `https://og-oyin.onrender.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setIsFavorite(false);
        user.Favorite = user.Favorite.filter((id) => id !== movieId);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(user);
      });
  };
  
  const movie = movies.find((b) => b._id === movieId);


  return (
    <Card  style={{width: '18rem'}} >
     <Card.Img className="h-100" variant="primary" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>Title: {movie.Title}<br/></Card.Title>
        <Card.Text>Description: {movie.Description}<br/></Card.Text>
       <Card.Text>Director: {movie.Director.Name}<br/></Card.Text>
        <Card.Text>Genre: {movie.Genre.Name}<br/></Card.Text>
        <Card.Text>Genre Description: {movie.Genre.Description}<br/></Card.Text>
        
        <Button className="color-button" onClick={removeFavorite}>
          Remove from favorites
        </Button>
        
        <Button className="color-button" onClick={addFavorite}>
          Add to favorites
        </Button>
      
      
        <Link to={`/`}>
        <Button
              className="back-button"
              style={{ cursor: "pointer" }}
              variant="primary"
              size="md"
            >
              Back
            </Button>
      </Link>
      
          
      </Card.Body>
    </Card>
    
  );
};



