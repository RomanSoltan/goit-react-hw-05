import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastsById } from '../../../services/api';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchCastsById(movieId);
        setCasts(data);
      } catch {
        setError('Failed to load cast data');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (loading) {
    return <p>Loading cast...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!casts.length) {
    return <p>No cast available for this movie.</p>;
  }

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
