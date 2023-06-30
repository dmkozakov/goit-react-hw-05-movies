import { Suspense, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import {
  ArrowIcon,
  ArrowBackWrapper,
  MovieContainer,
  AdditionalInfoLink,
} from 'components/MovieCard/MovieCard.styled';

export default function MovieCard({ movie }) {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  const { poster_path, title, tagline, vote_average, overview, genres } = movie;

  return (
    <div>
      <ArrowBackWrapper>
        <Link to={backLinkRef.current}>
          <ArrowIcon />
          Go back
        </Link>
      </ArrowBackWrapper>
      <MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`${title}`}
        />
        <div>
          <h2>{title}</h2>
          <p>{vote_average}</p>
          <ul>{genres && genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
          <p>{tagline}</p>
          <p>{overview}</p>
        </div>
      </MovieContainer>
      <AdditionalInfoLink>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AdditionalInfoLink>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.string,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
