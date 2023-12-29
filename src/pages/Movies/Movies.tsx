import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { normalizeMovies } from 'helpers/normalizeMovies';
import { IMovie } from 'interfaces/IMovie';
import NotFound from 'pages/NotFound/NotFound';
import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/movie-api';

interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState<IMovie[]>([]);
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
  }, [movieName]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    if (!(form.elements as FormElements).search.value) {
      return alert('Enter a query');
    }

    setSearchParams({
      query: (form.elements as FormElements).search.value.trim(),
    });

    form.reset();
  };

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} />
      {error && <NotFound />}
      {!error && movieName && <MovieList movies={movies} />}
      {movieName && movies.length === 0 && <NotFound />}
    </main>
  );
}
