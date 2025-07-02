'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MovieSection({ title, movies }) {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += offset;
    }
  };

  return (
    <section className="px-6 mb-10 mt-20">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Movie Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-2 scrollbar-hide mt-6 pr-6"
        >
          {movies.map((movie) => {
            const imagePath = movie.poster_path || movie.backdrop_path;
            return (
              <div
                key={movie.id}
                className="min-w-[150px] bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border border-zinc-800 cursor-pointer"
                onClick={() => router.push(`/movie/${movie.id}`)}
              >
                {imagePath && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${imagePath}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="w-full h-[225px] object-cover rounded-t-xl"
                    placeholder="blur"
                    blurDataURL="/placeholder.jpg" // Replace with your own blur placeholder if needed
                  />
                )}
                <p className="text-sm p-3 truncate text-white/90 font-semibold text-center bg-zinc-950 hover:text-red-500 transition-colors duration-300">
                  {movie.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
