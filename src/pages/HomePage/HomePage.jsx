import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendMovies } from '../../services/api';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (!movies) return;

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
