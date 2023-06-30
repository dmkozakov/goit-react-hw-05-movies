import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movie-api';
import { normalizeCast } from 'helpers/normalizeCast';
import CastItem from 'components/CastItem/CastItem';
import { AdditionalInfoList } from 'components/MovieCard/MovieCard.styled';

export default function Cast() {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await movieAPI.getMovieCredits(id);
        const cast = normalizeCast(response.data.cast);

        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieCast();
  }, [id]);

  return (
    <AdditionalInfoList>
      {cast.map(cast => (
        <CastItem cast={cast} key={cast.character} />
      ))}
    </AdditionalInfoList>
  );
}
