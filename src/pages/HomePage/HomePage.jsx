import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendMovies } from '../../services/api';
import s from './HomePage.module.css';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendMovies();
        setMovies(data);
      } catch {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (!movies) return;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className={s.error}>{error}</p>;
  }

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
