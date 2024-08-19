import React from "react";
import { unstable_noStore } from "next/cache";

const getCatBreeds = async (id: string) => {
  try {
    const response = await fetch(`${process.env.URL}/api/cats/${id}`, {
      cache: "no-store", // Disable caching to ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error("Failed to fetch breed data");
    }

    const data: CatBreedDetails = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return null;
  }
};

async function CatDetails({ params }: { params: { id: string } }) {
  unstable_noStore();
  const breed = await getCatBreeds(params.id);

  if (!breed) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-gray-500 text-lg">
          Breed not found or failed to load.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <img
          src={
            breed.reference_image_id
              ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
              : "/cat.webp"
          }
          alt={breed.name}
          className="w-full sm:w-1/3 h-64 object-cover sm:h-auto"
        />

        <div className="p-6 sm:w-2/3">
          <h2 className="text-2xl font-bold mb-4">{breed.name}</h2>
          <p className="text-gray-700 mb-4">{breed.description}</p>
          <ul className="text-sm text-gray-600 mb-4">
            <li>
              <span className="font-semibold">Temperament:</span>{" "}
              {breed.temperament}
            </li>
            <li>
              <span className="font-semibold">Origin:</span> {breed.origin}
            </li>
            <li>
              <span className="font-semibold">Life Span:</span>{" "}
              {breed.life_span} years
            </li>
            <li>
              <span className="font-semibold">Weight:</span>{" "}
              {breed.weight.metric} kg ({breed.weight.imperial} lbs)
            </li>
          </ul>
          <div className="flex flex-wrap justify-between text-sm text-blue-500">
            <a
              href={breed.cfa_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              CFA
            </a>
            <a
              href={breed.vetstreet_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              Vetstreet
            </a>
            <a
              href={breed.vcahospitals_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              VCA Hospitals
            </a>
            <a
              href={breed.wikipedia_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              Wikipedia
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatDetails;
