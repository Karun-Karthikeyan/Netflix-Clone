'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabaseClient';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md text-white">
      <nav className="flex items-center px-5 py-5 justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          NETFLIX
        </Link>

        {/* Nav Links */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-red-500">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/mylist" className="hover:text-red-500">
              My List
            </Link>
          </li>
        </ul>

        {/* Search and Logout */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search"
            className="bg-zinc-800 text-sm text-white px-3 py-1.5 rounded-full focus:outline-none w-32 sm:w-48"
          />

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-1 rounded text-sm hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="text-red-400 text-sm underline">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
