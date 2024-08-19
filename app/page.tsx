"use client";

import Card from "@/components/Card";
import { useEffect, useState } from "react";

export default async function Home() {
  const [breeds, setBreeds] = useState<Array<TCard> | null>([]);

  useEffect(() => {
    const fetchRandomBreeds = async () => {
      try {
        const res = await fetch(`/api`);

        const data = await res.json();

        setBreeds(data);
      } catch (error) {
        setBreeds(null);
      }
    };

    fetchRandomBreeds();
  }, []);

  if (breeds === null) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-gray-500 text-lg">
          Failed to load breeds.
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {breeds.map(({ id, breedName, picUrl, category }) => (
        <Card
          key={id}
          id={id}
          picUrl={picUrl}
          breedName={breedName}
          category={category}
        />
      ))}
    </div>
  );
}
