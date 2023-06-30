import MovieList from 'components/MovieList/MovieList';
import Seearchbar from 'components/Searchbar/Seearchbar';
import { normalizeMovies } from 'helpers/normalizeMovies';
import NotFound from 'pages/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/movie-api';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchMoviesByName = async () => {
      try {
        const response = await searchMovies(movieName);

        const normalizedMovies = normalizeMovies(response.data.results);

        setMovies(normalizedMovies);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchMoviesByName();
    //Отписаться от запроса
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (!form.elements.search.value) {
      return alert('Enter a query');
    }

    setSearchParams({ query: form.elements.search.value.trim() });

    form.reset();
  };

  return (
    <main>
      <Seearchbar onSubmit={handleSubmit} />
      {error && <NotFound />}
      {!error && movieName && <MovieList movies={movies} />}
      {movieName && movies.length === 0 && <NotFound />}
    </main>
  );
}
