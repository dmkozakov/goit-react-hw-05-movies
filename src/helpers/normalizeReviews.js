export function normalizeReviews(reviews) {
  return reviews.map(
    ({ author, author_details: { avatar_path }, content }) => ({
      author,
      avatar_path,
      content,
    })
  );
}
