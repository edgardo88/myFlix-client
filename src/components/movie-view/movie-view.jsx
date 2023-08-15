import './movie-view.scss';
import { Button, Card } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Card  style={{width: '18rem'}} >
      <Card.Img className="h-100" variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>Title: {movie.Title}<br/></Card.Title>
        <Card.Text>Description: {movie.Description}<br/></Card.Text>
        <Card.Text>Director: {movie.Director}<br/></Card.Text>
        <Card.Text>Genre: {movie.Genre}<br/></Card.Text>
        <Card.Text>{movie.Genre.Description}</Card.Text>
        <Button  onClick={onBackClick} className="back-button"style={{ cursor: "pointer" }}>
          Back
        </Button>
      </Card.Body>
    </Card>
  );
};