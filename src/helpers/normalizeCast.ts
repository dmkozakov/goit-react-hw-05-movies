interface Cast {
  profile_path: string;
  name: string;
  character: string;
}

export function normalizeCast(cast: Cast[]) {
  return cast.slice(0, 10).map(({ profile_path, name, character }) => ({
    profile_path,
    name,
    character,
  }));
}
