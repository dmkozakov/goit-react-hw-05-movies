export interface IReview {
  author: string;
  author_details: { avatar_path: string };
  content: string;
}

export interface INormalizedReview {
  author: string;
  avatar_path: string;
  content: string;
}
