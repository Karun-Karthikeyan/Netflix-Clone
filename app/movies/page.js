"use client";
import { fetchTrending } from "@/lib/tmdb";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await fetchTrending();
      setMovies(data);
    }
    getMovies();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-red-600 text-center">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.slice(0, 30).map((movie) => {
          const imagePath = movie.poster_path || movie.backdrop_path;
          return (
            <div key={movie.id} className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
              {imagePath ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="object-cover w-full h-[300px]"
                />
              ) : (
                <div className="w-full h-[300px] flex items-center justify-center bg-zinc-800 text-gray-400">No Image</div>
              )}
              <div className="p-4 w-full">
                <h2 className="text-lg font-bold text-center mb-2 truncate">{movie.title}</h2>
                <p className="text-xs text-gray-300 text-center line-clamp-2">{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
