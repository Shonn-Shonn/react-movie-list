import React from 'react'
import { useEffect,useState } from 'react';
import './App.css'
import { MovieCard } from './components/MovieCard';

// 905d8370

const API_URL = 'http://www.omdbapi.com/?apikey=af896338';

export default function App() {
  const [movies,setMovies] = useState([]);
  const [searchItem,setSearchItem] = useState('');
        const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        console.log(data.Search);
        console.log(data);
      }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);
  return (
    <div className='app'>
    <h1>MovieLand</h1>  
    <div className='search'>
        <input placeholder='Search for movies'
         value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
         />
         <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" width="50" height={50}
          alt="Search Free Icon Image" 
            onClick={() => searchMovies(searchItem)}
          />
    </div>
     
     {
      movies.length > 0 ? 
      (
          <div className='container'>
            {movies.map((movie,index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
      )  
         : 
      (
          <div className='empty'>
               <h2>There is no movie list</h2>
          </div>
      )
     }
    </div>
  )
}

