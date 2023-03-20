import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
    title:"The Fountain",
    description:"As a modern-day scientist, Tommy is strugling with normalitty, espretely searching for the medical breakthrough that will save the life of his cancer-sriken wifr, Izzi",
     genre:{
      name:"Drama",
      description:"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    director:{
      name:"Darren Aronofsky",
      bio:"Is an American film director, producer, and screenwriter. His films are noted for their surreal, melodramatic, and often disturbing elements, frequently in the form of psychological fiction. Furthermore, he is well and healthy in 2023!",
      birth:"February 12, 1969",
    },
    image:"https://en.wikipedia.org/wiki/The_Fountain",
  },

  {
    title:"Lord of the Rings",
    description:"The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
     genre:{
      name:"Drama",
      description:"In film and television, drama is a catagory of narative fiction for semi-fiction intended to be more serious than humourous in tone",
     },
    director:{
      name:"J.R.R. Tolkien",
      bio:"John Ronald Reuel Tolkien was a major scholar of the English language, specialising in Old and Middle English. Twice Professor of Anglo-Saxon (Old English) at the University of Oxford, he also wrote a number of stories, including most famously The Hobbit (1937) and The Lord of the Rings (1954–1955), which are set in a pre-historic era in an invented version of our world which he called by the Middle English name of Middle-earth. He later died on September 2, 1973",
      birth:"January 3, 1892",
    },
    image:"https://www.goodfreephotos.com/albums/other-photos/lord-of-the-rings-the-one-ring.jpg",
  },

  {
      title:"Twilight",
      description:"The film stars Kristen Stewart and Robert Pattinson as Bella Swan, a teenage girl, and Edward Cullen, a vampire, respectively, and focuses on the development of Bella and Edward's relationship and the subsequent efforts of Edward and his family to keep Bella safe from another coven of vampires.",
       genre:{
        name:"Romantic",
        description:"In film and television, Romantic is a romance novel or romantic novel generally refers to a type of genre fiction novel which places its primary focus on the relationship and romantic love between two people.",
       },
      director:{
    name:"Chris Weitz",
    bio:"Christopher John Weitz is an American film director, screenwriter, and producer. Further, He is very well and health in 2023.",
        "Birth":"1969",
      },
      image:"https://wallpaper-house.com/data/out/5/wallpaper2you_75612.jpg",
    },
  ]);

  //a way to identify whether there was a user click (on a movie) or not
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)}/>;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            onBookClick={(movie) => {
              setSelectedMovie(movie);
            }}
          />
        ))}
      </div>
    );
  };
    