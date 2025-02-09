import s from './MovieCastItem.module.css';

const MovieCastItem = ({
  cast: { character, original_name, profile_path, name },
}) => {
  const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

  return (
    <>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultImage
        }
        alt={`${name} as ${character}`}
      />
      <div className={s.castInfo}>
        <h2>{original_name}</h2>
        <p>
          <span>Character:</span> {character}
        </p>
      </div>
    </>
  );
};
export default MovieCastItem;
