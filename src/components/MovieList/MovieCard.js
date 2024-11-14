import React from "react";
import './Movie.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.post} alt={`${movie.title} poster`} className="movie-poster" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre}</p>
        <button className="book-btn">Đặt Vé</button>
      </div>
    </div>
  );
};

export default MovieCard;
