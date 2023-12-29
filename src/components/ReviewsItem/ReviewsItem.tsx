import { INormalizedReview } from 'interfaces/IReviews';

interface Props {
  reviews: INormalizedReview;
}

export default function ReviewsItem({ reviews }: Props) {
  const { author, avatar_path, content } = reviews;
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w45${avatar_path}`} alt={author} />
      <div>
        <h4>{author}</h4>
        <p>{content}</p>.
      </div>
    </li>
  );
}
