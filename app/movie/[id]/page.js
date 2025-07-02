import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const API_KEY = 'cd908e8fc38ba4f428be9cb6f398d438';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovie(id) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
  if (!res.ok) return null;
  return res.json();
}

export default async function MovieDetailPage({ params, searchParams }) {
  const movie = await fetchMovie(params.id);
  if (!movie) return notFound();

  const director = movie.credits?.crew?.find((c) => c.job === 'Director');
  const imagePath = movie.poster_path || movie.backdrop_path;
  const bgPath = movie.backdrop_path || movie.poster_path;

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Blurred Background */}
      {bgPath && (
        <Image
          src={`https://image.tmdb.org/t/p/original${bgPath}`}
          alt={movie.title}
          fill
          className="object-cover object-center absolute inset-0 z-0 blur-xl scale-110 opacity-40"
          priority
        />
      )}
      {/* Overlay */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-stretch bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-0 md:p-0 my-12">
        {/* Poster */}
        {imagePath && (
          <div className="flex-shrink-0 w-full md:w-[320px] h-[480px] relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={movie.title}
              fill
              className="object-cover object-center rounded-t-2xl md:rounded-l-2xl md:rounded-t-none shadow-lg"
              priority
            />
          </div>
        )}
        {/* Details */}
        <div className="flex-1 flex flex-col justify-between p-8 md:p-10">
          <div>
            <h1 className="text-4xl font-black mb-2 text-red-600 drop-shadow-lg leading-tight">{movie.title}</h1>
            {movie.tagline && <p className="text-lg text-red-200 italic mb-4">{movie.tagline}</p>}
            <p className="mb-6 text-base text-white/90 leading-relaxed max-h-40 overflow-y-auto scrollbar-hide">{movie.overview}</p>
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <span className="bg-red-600/80 text-white px-3 py-1 rounded-full font-semibold">{movie.release_date}</span>
              <span className="bg-zinc-800/80 text-white px-3 py-1 rounded-full font-semibold">⭐ {movie.vote_average} / 10</span>
              <span className="bg-zinc-800/80 text-white px-3 py-1 rounded-full font-semibold">{movie.runtime} min</span>
              {movie.genres?.map(g => (
                <span key={g.id} className="bg-zinc-700/80 text-white px-3 py-1 rounded-full font-semibold">{g.name}</span>
              ))}
            </div>
            <div className="mb-2 text-white/80">
              <span className="font-semibold">Directed by:</span> {director ? director.name : 'Unknown'}
            </div>
          </div>
          <Link href="/" className="mt-8 inline-block text-red-600 font-bold hover:underline text-base">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 