import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../../services/api';
import MovieReviewsItem from '../MovieReviewsItem/MovieReviewsItem';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsById(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

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
