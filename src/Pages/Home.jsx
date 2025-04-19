import React, { useEffect, useState } from 'react';
import SearchBox from '../Components/SearchField/SearchBox';
import { useNavigate } from 'react-router-dom';
import MovieCards from '../Components/MovieCard/MovieCards';

function Home() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('Avengers');
  const [loading, setLoading] = useState(false);

  function movieCardClickHandler(movieId) {
    navigate(`/Movie/${movieId}`);
  }

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Movie Search
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto'>
            Discover your favorite movies and TV shows. Search by title, explore details, and add them to your favorites.
          </p>
          <div className='max-w-2xl mx-auto'>
            <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} loading={loading} />
          </div>
        </div>
        <MovieCards 
          setLoading={setLoading} 
          searchInput={searchInput} 
          result={searchInput} 
          loading={loading} 
          cardClickHandler={movieCardClickHandler} 
        />
      </div>
    </div>
  );
}

export default Home;