import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieListStyled,
  MovieListLink,
  Img,
  MovieInfo,
} from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <MovieListStyled>
      {movies.map(({ id, title, poster_path, vote_average, overview }) => (
        <li key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={`https://image.tmdb.org/t/p/w154${poster_path}`}
              alt={`${title}`}
            />
            <MovieInfo>
              <h3>{title}</h3>
              <p>{overview}</p>
              <p>{vote_average}</p>
            </MovieInfo>
          </MovieListLink>
        </li>
      ))}
    </MovieListStyled>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.string,
    }).isRequired
  ).isRequired,
};
