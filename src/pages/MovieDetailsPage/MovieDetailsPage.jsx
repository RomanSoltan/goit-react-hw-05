import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../../services/api';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';
import Loader from '../../components/Loader/Loader';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = useRef(location?.state ?? '/movies');

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <Loader />;
  }

  const {
    original_title,
    poster_path,
    overview,
    tagline,
    runtime,
    release_date,
    vote_average,
  } = movie;

  return (
    <section>
      <GoBackLink to={backLinkHref.current}>Back to Movies</GoBackLink>
      <div className={s.inner}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={poster_path}
        />

        <div className={s.wrapInfo}>
          <h2 className={s.title}>{original_title}</h2>
          <p>
            <span>Slogan:</span> {tagline}
          </p>
          <h3 className={s.overview}>Overview</h3>
          <p>{overview}</p>
          <p>
            <span>Runtime:</span> {runtime} minutes
          </p>
          <p>
            <span>Release Date:</span> {release_date}
          </p>
          <p>
            <span>Vote Average:</span> {vote_average}
          </p>
        </div>
      </div>

      <h3 className={s.moreInfoTitle}>More Information about film</h3>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink className={buildLinkClass} to="cast">
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetailsPage;
