import { ICast } from 'interfaces/ICast';

interface Props {
  cast: ICast;
}

export default function CastItem({ cast }: Props) {
  const { profile_path, name, character } = cast;

  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w45${profile_path}`} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{character}</p>
      </div>
    </li>
  );
}
