export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3/",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};



export const fetchMovies = async({ query }: { query: string }) => {
    const endpoint= "/discover/movie?sort_by=popularity.desc";
// const url =
//   "https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ0OWU1NTU5NmU0OWRmMTRhMzI2MWQyNzVhOTI5NCIsIm5iZiI6MTc0NDI3NjMxOS40NzMsInN1YiI6IjY3Zjc4YjVmZDRjNDQ0YTFjYzk5Njk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TIaok4rHGTproP75gqz7XqLvtGTs2ErBGAogdbueNMs",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
