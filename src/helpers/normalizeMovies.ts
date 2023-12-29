import { IMovie } from 'interfaces/IMovie';

export function normalizeMovies(movies: IMovie[]) {
  return movies.map(
    ({ id, poster_path, title, tagline, vote_average, overview }) => {
      if (typeof vote_average === 'number') {
        return {
          id,
          title,
          tagline,
          poster_path,
          overview,
          vote_average: vote_average.toFixed(1),
        };
      }
      return {
        id,
        title,
        tagline,
        poster_path,
        overview,
        vote_average,
      };
    }
  );
}

export function normalizeSingleMovie({
  id,
  poster_path,
  title,
  tagline,
  vote_average,
  overview,
  genres = [],
}: IMovie) {
  if (typeof vote_average === 'number') {
    return {
      id,
      title,
      tagline,
      poster_path,
      overview,
      vote_average: vote_average.toFixed(1),
      genres: genres.map(el => {
        if (typeof el !== 'string') {
          return el.name;
        }
        return el;
      }),
    };
  }
}
