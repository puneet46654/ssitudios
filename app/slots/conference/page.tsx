"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-6xl font-semibold text-black">
        Hi
      </h1>
    </main>
  );
}