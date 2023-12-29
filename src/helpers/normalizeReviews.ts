import { INormalizedReview, IReview } from 'interfaces/IReviews';

export function normalizeReviews(reviews: IReview[]) {
  return reviews.map(
    ({
      author,
      author_details: { avatar_path },
      content,
    }): INormalizedReview => ({
      author,
      avatar_path,
      content,
    })
  );
}
