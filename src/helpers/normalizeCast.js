export function normalizeCast(cast) {
  return cast.slice(0, 10).map(({ profile_path, name, character }) => ({
    profile_path,
    name,
    character,
  }));
}
