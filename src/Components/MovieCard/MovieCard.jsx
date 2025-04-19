import React from 'react';
import { FaHeart } from 'react-icons/fa';

function MovieCard({ title, year, poster, cardClickHandler, movieId, type, onFavoriteClick, isFavorite }) {
  const defaultPoster = 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fb7fef67-6965-4775-b416-91661baa06d8/dd5be78d-ca35-4c9f-9d09-b09a6f3b2c95.png';
  
  const handleHeartClick = (e) => {
    e.stopPropagation();
    onFavoriteClick(movieId);
  };

  return (
    <div onClick={() => cardClickHandler(movieId)} 
         className='bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden w-32 sm:w-32 md:w-40 lg:w-44 m-2 sm:m-3 hover:scale-105 duration-75 cursor-pointer relative flex flex-col'>
      <div className='relative w-full' style={{ paddingBottom: '150%' }}>
        <img src={poster === 'N/A' ? defaultPoster : poster} alt={title} className='absolute top-0 left-0 w-full h-full object-cover object-top' />
        <button 
          onClick={handleHeartClick}
          className='absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200'
        >
          <FaHeart className={`text-lg ${isFavorite ? 'text-red-500' : 'text-white'}`} />
        </button>
      </div>
      <div className='p-2 sm:p-3 flex flex-col flex-grow'>
        <h2 className='text-xs sm:text-sm md:text-base lg:text-base text-gray-900 dark:text-white line-clamp-2 mb-2'>{title}</h2>
        <div className='flex justify-between items-center mt-auto'>
          <p className='text-gray-700 dark:text-gray-400 text-xs sm:text-sm md:text-base'>{year}</p>
          <span className='text-xs sm:text-sm md:text-base bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded'>
            {type === 'movie' ? 'Movie' : 'Series'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;