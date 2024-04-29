import { Link, useParams } from "react-router-dom";
import { productsArr } from "../data";
import { useState } from "react";
const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const selectedMovie = productsArr.find((item) => item.id === parseInt(id));

  if (!selectedMovie) {
    return <p style={{ margin: "10rem auto" }}>Loading...</p>;
  }

  return (
    <div className="movie_details_container">
      <img
        src={selectedMovie.imageUrl}
        alt={selectedMovie.title}
        className="movie_details_poster"
      />
      <div className="movie_details">
        <h2>{selectedMovie.title}</h2>
        <p>Director: {selectedMovie.details.director}</p>
        <p>Cast: {selectedMovie.details.cast.join(", ")}</p>
        <p>Description: {selectedMovie.details.description}</p>
        <p>Genre: {selectedMovie.details.genre}</p>
        <p>Duration: {selectedMovie.details.duration}</p>
        <p>Release Date: {selectedMovie.details.releaseDate}</p>
        {/* Add more movie details as needed */}
        <a
          href={selectedMovie.details.trailer}
          target="_blank"
          rel="noopener noreferrer"
          className="trailer_btn"
        >
          Watch Trailer
        </a>
      </div>
      <Link to="/store" className="Link">
        {" "}
        <button className="backbtn">Back to Movies Section</button>
      </Link>
    </div>
  );
};
export default MovieDetails;
