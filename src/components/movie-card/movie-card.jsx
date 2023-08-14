import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "./book-card.scss";


export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Img className="h-100" variant="top" src={movie.ImageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
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