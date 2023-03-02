export const genres = [
  {
    id: "5b21ca3eeb7f6fbccd471818",
    name: "Asia",
  },
  {
    id: "5b21ca3eeb7f6fbccd471814",
    name: "Africa",
  },
  {
    id: "5b21ca3eeb7f6fbccd471820",
    name: "Australia",
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    name: "Europe",
  },
  {
    id: "5b21ca3eeb7f6fbccd471822",
    name: "North America",
  },
  {
    id: "5b21ca3eeb7f6fbccd471823",
    name: "South America",
  },
];

export function getGenres() {
  return genres.filter((g) => g);
}
