import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../Components/MovieCard/MovieCard';

function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    setLoading(false);
  }, []);

  const handleCardClick = (movieId) => {
    navigate(`/Movie/${movieId}`);
  };

  const handleFavoriteClick = (movieId) => {
    const updatedFavorites = favorites.filter(movie => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='flex w-full items-center flex-col pt-28 bg-gray-100 dark:bg-gray-900 min-h-screen pb-24'>
      <h1 className='text-3xl font-semibold mb-10 text-gray-900 dark:text-white'>My Favorites</h1>
      {loading ? (
        <div className="flex justify-center items-center mt-24">
          <div className="spinner"></div>
        </div>
      ) : favorites.length > 0 ? (
        <div className='flex flex-wrap justify-center px-2 md:px-4 lg:px-12 gap-3'>
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              type={movie.Type}
              cardClickHandler={handleCardClick}
              movieId={movie.imdbID}
              onFavoriteClick={handleFavoriteClick}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p className='text-gray-600 dark:text-gray-400 text-xl'>No favorites yet. Add some movies to your favorites!</p>
      )}
    </div>
  );
}

export default Favorites; 