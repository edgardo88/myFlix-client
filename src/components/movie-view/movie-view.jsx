import './movie-view.scss';
import { Button, Card } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card  style={{width: '18rem'}} >
      <Card.Img className="h-100" variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Card.Text>{movie.Director}</Card.Text>
        <Card.Text>{movie.Genre}</Card.Text>
        <Card.Text>{movie.Genre.Description}</Card.Text>
        <Button  onClick={onBackClick} className="back-button"style={{ cursor: "pointer" }}>
          Back
        </Button>
      </Card.Body>
    </Card>
  );
};