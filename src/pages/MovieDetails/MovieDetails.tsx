import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movie-api';
import { normalizeSingleMovie } from 'helpers/normalizeMovies';
import NotFound from 'pages/NotFound/NotFound';
import MovieCard from 'components/MovieCard/MovieCard';
import { IMovie } from 'interfaces/IMovie';

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          const response = await movieAPI.getMovieDetails(id);

          const normalizedMovie = normalizeSingleMovie(response.data);

          if (normalizedMovie) {
            setMovie(normalizedMovie);
          }
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <main>{error ? <NotFound /> : movie && <MovieCard movie={movie} />}</main>
  );
}
