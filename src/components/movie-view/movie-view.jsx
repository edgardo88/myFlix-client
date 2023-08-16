import './movie-view.scss';
import {  Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {  Button,Card } from "react-bootstrap";


export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);

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
        <Button className="back-button">Back</Button>
      </Link>
      </Card.Body>
    </Card>
    
  );
};



