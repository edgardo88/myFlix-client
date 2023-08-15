import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./movie-card.scss";


export const MovieCard = ({ movie, onMovieClick }) => {
  console.log('movie-card',movie)
  return (
    <Card  style={{width: '18rem'}} >
      <Card.Img className="h-100" variant="primary" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Button  onClick={() => onMovieClick(movie)} variant="primary">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({              
   //_id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
     // Bio: PropTypes.string.isRequired,
     // Birth: PropTypes.string.isRequired,
    }),
    Description: PropTypes.string,
    ReleaseYear: PropTypes.string,
    Genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
    }),
  }),
  onMovieClick: PropTypes.func.isRequired
};