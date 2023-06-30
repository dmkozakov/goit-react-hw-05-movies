export function normalizeMovies(movies) {
  return movies.map(
    ({ id, poster_path, title, tagline, vote_average, overview }) => ({
      id,
      title,
      tagline,
      poster_path,
      overview,
      vote_average: vote_average.toFixed(1),
    })
  );
}

export function normalizeSingleMovie({
  id,
  poster_path,
  title,
  tagline,
  vote_average,
  overview,
  genres,
}) {
  return {
    id,
    title,
    tagline,
    poster_path,
    overview,
    vote_average: vote_average.toFixed(1),
    genres: genres.map(({ name }) => name),
  };
}
