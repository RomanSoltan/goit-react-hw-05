import { Link, useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li className={s.card} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <MoviesCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
