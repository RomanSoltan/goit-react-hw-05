import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastsById } from '../../../services/api';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCastsById(movieId);
      setCasts(data);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <h2 className={s.title}>Casting</h2>
      <ul className={s.list}>
        {casts.map(cast => (
          <li className={s.card} key={cast.id}>
            <MovieCastItem cast={cast} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
