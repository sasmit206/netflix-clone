import React from 'react';
import './MovieCard.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img
        className="movieCard__poster"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title || movie.name}
      />
    </div>
  );
}
