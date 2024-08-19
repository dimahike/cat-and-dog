import { NextResponse } from "next/server";

interface ApiResponse {
  dogBreeds: DogBreed[];
  catBreeds: CatBreed[];
}

async function fetchRandomBreeds(apiUrl: string, totalPages: number) {
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const response = await fetch(`${apiUrl}?page=${randomPage}&limit=8`);
  const breeds = await response.json();

  return breeds;
}

export async function GET() {
  try {
    const totalDogPages = 20;
    const totalCatPages = 7;

    const randomDogBreeds: DogBreed[] = await fetchRandomBreeds(
      "https://api.thedogapi.com/v1/breeds",
      totalDogPages,
    );
    const randomCatBreeds: CatBreed[] = await fetchRandomBreeds(
      "https://api.thecatapi.com/v1/breeds",
      totalCatPages,
    );

    // Transform dog breeds into TCard format
    const dogCards: TCard[] = randomDogBreeds.map((breed) => ({
      id: breed.id.toString(),
      picUrl: breed.reference_image_id
        ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
        : "/dog.webp",
      breedName: breed.name,
      category: "dog",
    }));

    // Transform cat breeds into TCard format
    const catCards: TCard[] = randomCatBreeds.map((breed) => ({
      id: breed.id,
      picUrl: breed.reference_image_id
        ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
        : "/cat.webp",
      breedName: breed.name,
      category: "cat",
    }));

    // Merge the two arrays
    const mergedCards: TCard[] = [...dogCards, ...catCards]
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);

    return NextResponse.json(mergedCards);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch breeds" },
      { status: 500 },
    );
  }
}
