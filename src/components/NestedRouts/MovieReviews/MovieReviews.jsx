import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../../services/api';
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchReviewsById(movieId);
        setReviews(data);
      } catch {
        setError('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (loading) {
    return <p className={s.loading}>Loading reviews...</p>;
  }

  if (error) {
    return <p className={s.error}>{error}</p>;
  }

  if (!reviews.length) {
    return <p className={s.noReviews}>No reviews available for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map((review, i) => (
        <li className={s.item} key={i}>
          <MovieReviewsItem review={review} />
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
