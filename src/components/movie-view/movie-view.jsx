import './movie-view.scss';
import {  Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import {  Button,Card } from "react-bootstrap";
import { useEffect, useState } from "react";


export const MovieView = ({ movies, user, token, updateUser }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b._id === movieId);

  const [isFavorite, setIsFavorite] = useState(
    user.FavoriteMovies.includes(movie._id)
  );
  useEffect(() => {
    setIsFavorite(user.FavoriteMovies.includes(movie._id));
    window.scrollTo(0, 0);
  }, [movieId]);

  const addFavorite = () => {
    fetch(
      "https://og-oyin.onrender.com/users/" + user.Username +"/" + movie._id,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("Successfully added to favorites");
          setIsFavorite(true);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFavorite = () => {
    fetch(
      "https://og-oyin.onrender.com/users/" + user.Username +"/" + movie._id,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert("Successfully deleted from favorites");
          setIsFavorite(false);
          updateUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };


  return (
    <Card  style={{width: '18rem'}} >
     <Card.Img className="h-100" variant="primary" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>Title: {movie.Title}<br/></Card.Title>
        <Card.Text>Description: {movie.Description}<br/></Card.Text>
       <Card.Text>Director: {movie.Director.Name}<br/></Card.Text>
        <Card.Text>Genre: {movie.Genre.Name}<br/></Card.Text>
        <Card.Text>Genre Description: {movie.Genre.Description}<br/></Card.Text>
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
      {isFavorite ? (
            <Button
              variant="danger"
              className="back-button ms-2"
              onClick={removeFavorite}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button className="back-button ms-2" onClick={addFavorite}>
              Add to favorites
            </Button>
          )}
      </Card.Body>
    </Card>
    
  );
};



