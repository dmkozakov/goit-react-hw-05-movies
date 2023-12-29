import { useLocation } from 'react-router-dom';
import {
  MovieListStyled,
  MovieListLink,
  Img,
  MovieInfo,
} from './MovieList.styled';
import { IMovie } from 'interfaces/IMovie';

interface Props {
  movies: IMovie[];
}

export default function MovieList({ movies }: Props) {
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
