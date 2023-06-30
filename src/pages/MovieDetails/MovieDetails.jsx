import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movie-api';
import { normalizeSingleMovie } from 'helpers/normalizeMovies';
import NotFound from 'pages/NotFound/NotFound';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieAPI.getMovieDetails(id);

        const normalizedMovie = normalizeSingleMovie(response.data);
        setMovie(normalizedMovie);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return <main>{error ? <NotFound /> : <MovieCard movie={movie} />}</main>;
}
