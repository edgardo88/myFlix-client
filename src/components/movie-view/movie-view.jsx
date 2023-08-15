import './movie-view.scss';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);

  return (
    <Card  style={{width: '18rem'}} >
      <Card.Img className="h-100" variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Director}</Card.Text>
        <Card.Text>{movie.Genre}</Card.Text>
        <Card.Text>{movie.Genre.Description}</Card.Text>
        <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
      </Card.Body>
    </Card>
  );
};