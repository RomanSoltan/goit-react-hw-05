import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './App.module.css';
import { lazy, Suspense } from 'react';
import Loader from '../Loader/Loader';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage'),
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage'),
);
const MovieCast = lazy(() => import('../NestedRouts/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('../NestedRouts/MovieReviews/MovieReviews'),
);

function App() {
  return (
    <div className={s.container}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
