import MovieList from 'components/MovieList/MovieList';
import { normalizeMovies } from 'helpers/normalizeMovies';
import { useEffect, useState } from 'react';
import * as movieAPI from 'services/movie-api';
// import { controller } from 'services/movie-api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieAPI.getTrendingMovies();

        const normalizedMovies = normalizeMovies(response.data.results);
        setMovies(normalizedMovies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();

    // return () => {
    //   console.log('Unmount');
    //   controller.abort();
    // };
  }, []);
  // console.log(movies);

  return (
    <main>
      <MovieList movies={movies} />
    </main>
  );
}
