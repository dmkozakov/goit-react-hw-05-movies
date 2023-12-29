export interface Genre {
  name: string;
}

export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  tagline: string;
  vote_average: string | number;
  overview: string;
  genres?: Genre[] | string[];
}
