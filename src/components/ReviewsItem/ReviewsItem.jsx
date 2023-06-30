import React from 'react';

export default function ReviewsItem({ reviews }) {
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
