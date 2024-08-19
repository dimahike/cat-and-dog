import Card from "@/components/Card";

const getBreeds = async () => {
  try {
    const response = await fetch(`${process.env.URL}/api`, {
      cache: "no-store", // Disable caching to ensure fresh data on each request
    });
    const data: Array<TCard> = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return null;
  }
};

export default async function Home() {
  const breeds = await getBreeds();

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
