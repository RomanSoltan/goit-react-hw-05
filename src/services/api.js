import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const END_POINT_TREND_DAY = 'trending/movie/day';

const API_READ_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDZmZWFhMWM5ZWM5MjdmOTI2NmVkMDM2NjM2ODRiNCIsIm5iZiI6MTczMzc3MDE1NC4wMTcsInN1YiI6IjY3NTczYmFhMTliMDRlNzE1NDQ3MmNlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oN80Z9fvGkS-goscDyDT9AMT5IFUqTatndQL-1Qhgbc';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
  },
};

export const fetchTrendMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`${END_POINT_TREND_DAY}`, options);

    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Could not fetch movies');
  }
};

export const fetchSearchMovies = async () => {
  try {
    const { data } = await axios.get(`search/movie`, options);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error serching movies:', error);
    throw new Error('Could not serch movies');
  }
};

export const fetchMoviesById = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, options);
    return data;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw new Error('Could not fetch image');
  }
};

export const fetchCastsById = async movieId => {
  try {
    const {
      data: { cast },
    } = await axios.get(`movie/${movieId}/credits`, options);
    return cast;
  } catch (error) {
    console.error('Error fetching cast:', error);
    throw new Error('Could not fetch cast');
  }
};

export const fetchReviewsById = async movieId => {
  try {
    const {
      data: { results },
    } = await axios.get(`movie/${movieId}/reviews`, options);

    return results;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Could not fetch reviews');
  }
};
