const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const options = {
    method: 'GET',
    params: {
        query: '',
    },
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
  }
};


export async function fetchMovies(query: string) {
  try {
    // Додаємо query до URL
    const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(query)}&language=en-US&page=1`, options);
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }

    const data = await response.json();
    return data.results; // Повертаємо масив фільмів
  } catch (err) {
    console.error(err);
    return [];
  }
}