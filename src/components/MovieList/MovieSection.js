import React from "react";
import PropTypes from "prop-types";  // Import PropTypes to validate props
import MovieCard from "./MovieCard";
import './Movie.css'
// Define MovieSection component
function MovieSection ({ title, movies }) {
  return (
    <section className="movie-section">
      <h2>{title}</h2>
      <div className="movie-cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button className="view-more">Xem Thêm</button>
    </section>
  );
};

// PropTypes for validation
MovieSection.propTypes = {
  title: PropTypes.string.isRequired,  // title should be a string
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,   // id should be a number
      title: PropTypes.string.isRequired, // title should be a string
      rating: PropTypes.string.isRequired, // rating should be a string
      genre: PropTypes.string.isRequired  // genre should be a string
    })
  ).isRequired // movies should be an array of movie objects
};

export default MovieSection;
