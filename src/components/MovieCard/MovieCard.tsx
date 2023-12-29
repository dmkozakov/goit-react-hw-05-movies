import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import {
  ArrowIcon,
  ArrowBackWrapper,
  MovieContainer,
  AdditionalInfoLink,
} from 'components/MovieCard/MovieCard.styled';
import { IMovie } from 'interfaces/IMovie';

interface Props {
  movie: IMovie;
}

export default function MovieCard({ movie }: Props) {
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
          <ul>
            {genres &&
              genres.map(genre => {
                if (typeof genre !== 'string') {
                  return <li key={genre.name}>{genre}</li>;
                }
                return <li key={genre}>{genre}</li>;
              })}
          </ul>
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
