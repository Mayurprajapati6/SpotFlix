import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './Spinner.css';

function MovieCards({ searchInput, cardClickHandler, setLoading, loading }) {
  const [movies, setMovies] = useState([]);
  const [result, setResult] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchInput)}&page=${page}&apikey=d36a97a5`);
      const data = await response.json();
      setMovies(data.Search || []);
      setResult(data.totalResults || 0);
      setTotalPages(Math.ceil((data.totalResults || 0) / 10));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchInput]);

  useEffect(() => {
    fetchData(currentPage);
  }, [searchInput, currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFavoriteClick = (movieId) => {
    const movie = movies.find(m => m.imdbID === movieId);
    if (movie) {
      const isFavorite = favorites.some(f => f.imdbID === movieId);
      let updatedFavorites;
      
      if (isFavorite) {
        updatedFavorites = favorites.filter(f => f.imdbID !== movieId);
      } else {
        updatedFavorites = [...favorites, movie];
      }
      
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className='relative min-h-screen pb-16'>
      <div className='mt-10 flex-col flex px-8 items-center'>
        {movies.length ? (
          <p className='px-8 text-gray-600 dark:text-gray-400 text-lg mb-6'>
            Found {result} results for "{searchInput}"
          </p>
        ) : null}
        <div className='flex flex-wrap justify-center px-2 md:px-4 lg:px-12 gap-3'>
          {loading && (
            <div className='flex justify-center items-center mt-24'>
              <div className="spinner m-auto mt-24"></div>
            </div>
          )}
          {!loading && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                type={movie.Type}
                cardClickHandler={cardClickHandler}
                movieId={movie.imdbID}
                onFavoriteClick={handleFavoriteClick}
                isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
              />
            ))
          ) : (
            !loading && (
              <div className='text-center mt-32'>
                <p className='text-gray-600 dark:text-gray-400 text-xl font-semibold mb-4'>
                  No results found for "{searchInput}"
                </p>
                <p className='text-gray-500 dark:text-gray-500 mb-4'>
                  Try searching for something else or check your spelling
                </p>
                <div className='text-gray-500 dark:text-gray-400'>
                  <p className='mb-2'>Popular searches:</p>
                  <div className='flex flex-wrap justify-center gap-2'>
                    <button 
                      onClick={() => setSearchInput('action movies')}
                      className='px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-600 transition-colors'
                    >
                      Action Movies
                    </button>
                    <button 
                      onClick={() => setSearchInput('comedy series')}
                      className='px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-600 transition-colors'
                    >
                      Comedy Series
                    </button>
                    <button 
                      onClick={() => setSearchInput('sci-fi movies')}
                      className='px-4 py-2 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-slate-600 transition-colors'
                    >
                      Sci-Fi Movies
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {movies.length > 0 && !loading && (
        <div className='w-full py-4 mt-8'>
          <div className='flex justify-center gap-2 w-full px-4'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white bg-blue-600 dark:bg-slate-700 disabled:bg-gray-400 dark:disabled:bg-slate-500 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 dark:hover:bg-slate-600"
            >
              &laquo; 
            </button>
            <div className="flex space-x-2">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full ${
                    page === currentPage
                      ? 'bg-blue-800 text-white dark:bg-slate-800'
                      : 'bg-blue-400 text-white dark:bg-slate-600'
                  } transition duration-200 transform hover:scale-105 dark:hover:bg-slate-500`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white bg-blue-600 dark:bg-slate-700 disabled:bg-gray-400 dark:disabled:bg-slate-500 disabled:cursor-not-allowed transition duration-200 transform hover:scale-105 dark:hover:bg-slate-600"
            >
               &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCards;