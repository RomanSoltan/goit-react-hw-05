import s from './MoviesCard.module.css';

const MoviesCard = ({ movie: { poster_path, original_title } }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <div className={s.movieInfo}>
        <h2>{original_title}</h2>
      </div>
    </>
  );
};
export default MoviesCard;
