import s from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({ review: { author, content } }) => {
  return (
    <>
      {!author && !content ? (
        <p className={s.noReviews}>Sorry, no reviews</p>
      ) : (
        <>
          <h2 className={s.title}>Reviews</h2>
          <h3 className={s.subtitle}>Author: {author}</h3>
          <p className={s.descr}>
            {content ? content : 'So sorry, reviews not found'}
          </p>
        </>
      )}
    </>
  );
};
export default MovieReviewsItem;
