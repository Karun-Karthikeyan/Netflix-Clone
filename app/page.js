'use client';

import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';
import Navbar from './components/Navbar';
import Carsoul from './components/Carsoul';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';
import { fetchTrending, fetchTopRated, fetchActionMovies } from '@/lib/tmdb';

export default function HomePage() {
  const [session, setSession] = useState(null);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);

  useEffect(() => {
    const loadSessionAndMovies = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        const [t, tr, a] = await Promise.all([
          fetchTrending(),
          fetchTopRated(),
          fetchActionMovies(),
        ]);
        setTrending(t);
        setTopRated(tr);
        setAction(a);
      }
    };

    loadSessionAndMovies();
  }, []);

  if (!session) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Please{' '}
          <a href="/login" className="text-red-500 underline">
            login
          </a>{' '}
          to view the content.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen pt-[80px]">
      <Carsoul movies={trending.slice(0, 5)} />
      <MovieSection title="Trending Movies" movies={trending.slice(0, 15)} />
      <MovieSection title="Top Rated Movies" movies={topRated.slice(0, 15)} />
      <MovieSection title="Action Movies" movies={action.slice(0, 15)} />
    </main>
  );
}
