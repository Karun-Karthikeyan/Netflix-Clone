import { fetchSearchResults } from '@/lib/tmdb';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || '';
  const movies = query ? await fetchSearchResults(query) : [];

  return (
    <main className="bg-black text-white min-h-screen pt-[100px] px-6">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for: <span className="text-red-400">{query}</span>
      </h1>

      {movies.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-zinc-900 rounded overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-semibold truncate">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
