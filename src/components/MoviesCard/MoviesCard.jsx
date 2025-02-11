import s from './MoviesCard.module.css';

const MoviesCard = ({ movie: { poster_path, original_title } }) => {
  const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

  return (
    <>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImage
        }
        alt={original_title || 'Movie Poster'}
      />
      <figcaption className={s.movieInfo}>
        <h2>{original_title}</h2>
      </figcaption>
    </>
  );
};
export default MoviesCard;
