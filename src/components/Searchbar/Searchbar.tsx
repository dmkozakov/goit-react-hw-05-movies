import { FormEvent } from 'react';

interface Props {
  onSubmit: (e: FormEvent) => void;
}

export default function Searchbar({ onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="search" onChange={e => e.target.value} />
      <button type="submit">search</button>
    </form>
  );
}
