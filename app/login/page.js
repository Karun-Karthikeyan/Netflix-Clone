'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabaseClient';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      <Image
        src="/BG.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center z-0 opacity-60"
      />
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-white/20 p-10 rounded-2xl max-w-md w-full text-white space-y-7 shadow-2xl relative z-10"
      >
        <h2 className="text-3xl font-extrabold text-center mb-2 drop-shadow-lg tracking-tight">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>

        {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

        <input
          type="email"
          className="w-full p-3 rounded-lg bg-zinc-800/80 border border-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition placeholder-gray-300"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-3 rounded-lg bg-zinc-800/80 border border-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition placeholder-gray-300"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg font-bold shadow-md transition text-lg">
          {isSignUp ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center mt-2">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-red-400 underline cursor-pointer"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
}
