const API_KEY = 'cd908e8fc38ba4f428be9cb6f398d438';
const BASE_URL = 'https://api.themoviedb.org/3';
export async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  console.log('Top Rated status:', res.status);
  const data = await res.json();
  console.log('Top Rated data:', data); // 👈
  return data.results || [];
}

export async function fetchActionMovies() {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
  console.log('Action Movies status:', res.status);
  const data = await res.json();
  console.log('Action Movies data:', data); // 👈
  return data.results || [];
}

export async function fetchSearchResults(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await res.json();
  return data.results || [];
}