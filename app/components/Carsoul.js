'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="w-full h-[60vh]"
    >
      {movies.map((movie, index) => {
        const imageUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
        return (
          <SwiperSlide key={movie.id}>
            <div className="relative w-full h-[60vh] text-white flex items-end p-9">
              {/* Use next/image for the first slide to boost LCP */}
              {index === 0 ? (
                <Image
                  src={imageUrl}
                  alt={movie.title}
                  fill
                  priority 
                  className="object-cover object-center absolute inset-0 -z-10"
                />
              ) : (
                <div
                  className="absolute inset-0 -z-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              )}

              <div className="p-6  max-w-xl ">
                <h2 className="text-3xl font-extrabold tracking-tight mb-2 drop-shadow-lg">
                  {movie.title}
                </h2>
                <p className="text-base text-white/90 leading-relaxed line-clamp-3 drop-shadow-sm">
                  {movie.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
