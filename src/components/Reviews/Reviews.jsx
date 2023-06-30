import { normalizeReviews } from 'helpers/normalizeReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from 'services/movie-api';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import { AdditionalInfoList } from 'components/MovieCard/MovieCard.styled';

export default function Reviews() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await movieAPI.getMovieReviews(id);
        const reviews = normalizeReviews(response.data.results);

        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [id]);

  return (
    <AdditionalInfoList>
      {reviews.map(review => (
        <ReviewsItem reviews={review} key={review.content} />
      ))}
    </AdditionalInfoList>
  );
}
