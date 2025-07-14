import React, { useEffect, useState } from 'react';
import './Banner.css';

const API_KEY = 'c3b690f277f82dbd3da2db5a2d2d0f21';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`);
      const data = await res.json();
      const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="banner__description">
          {movie?.overview?.length > 150
            ? movie.overview.slice(0, 150) + '...'
            : movie?.overview}
        </p>
        <div className="banner__buttons">
          <button className="banner__button">▶ Play</button>
          <button className="banner__button">More Info</button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
