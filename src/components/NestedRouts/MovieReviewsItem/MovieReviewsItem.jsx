import s from './MovieReviewsItem.module.css';

const MovieReviewsItem = ({ review: { author, content } }) => {
  return (
    <>
      <h3 className={s.title}>Author: {author}</h3>
      <p className={s.descr}>
        {content ? content : 'So sorry reniews not found'}
      </p>
    </>
  );
};
export default MovieReviewsItem;
