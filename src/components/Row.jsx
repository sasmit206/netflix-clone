import React, { useEffect, useState } from 'react';
import './Row.css';
import MovieCard from './MovieCard';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

export default function Row({ title, fetchUrl, apiKey }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fullUrl = `${fetchUrl}${fetchUrl.includes('?') ? '&' : '?'}api_key=${apiKey}`;
        console.log(`[${title}] Fetching:`, fullUrl);

        const res = await fetch(fullUrl);
        const data = await res.json();
        console.log(`[${title}] Fetched data:`, data);

        if (data && Array.isArray(data.results)) {
          const filtered = data.results.filter((m) => m.poster_path);
          console.log(`[${title}] Filtered movies count:`, filtered.length);
          setMovies(filtered);
        } else {
          console.error(`[${title}] No valid results in response`);
        }
      } catch (err) {
        console.error(`[${title}] Error fetching movies:`, err);
      }
    }
    fetchData();
  }, [fetchUrl, apiKey]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.length === 0 ? (
          <p style={{ color: '#999' }}>No movies found.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
