import { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';
import Loader from '../../components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        if (query) {
          setLoading(true);
          const data = await fetchSearchMovies(query);
          setMovies(data);
        } else {
          setMovies([]);
        }
      } catch {
        setError('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className={s.error}>{error}</p>;
  }

  const handleChangeQuery = value => {
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };

  const filteredMovies = movies.filter(movie =>
    movie.original_title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <SearchBox handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};
export default MoviesPage;
