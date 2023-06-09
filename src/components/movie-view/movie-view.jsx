export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.ImageURL} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <p><span>Description: </span></p>
        <span>{movie.Description}</span>
      </div>
      <div>
        <p><span>Director: </span></p>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <p><span>Genre: </span></p>
        <span>{movie.Genre.Name}</span>
        <p><span>Genre Description:</span></p>
        <span>{movie.Genre.Description}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};