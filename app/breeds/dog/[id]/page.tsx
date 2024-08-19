const getDogBreeds = async (id: string) => {
  try {
    const response = await fetch(`${process.env.URL}/api/dogs/${id}`, {
      cache: "no-store", // Disable caching to ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error("Failed to fetch breed data");
    }

    const data: DogBreed = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    return null;
  }
};

async function DogDetails({ params }: { params: { id: string } }) {
  const breed = await getDogBreeds(params.id);

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
              ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
              : "/dog.webp"
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
            {breed.origin && (
              <li>
                <span className="font-semibold">Origin:</span> {breed.origin}
              </li>
            )}
            <li>
              <span className="font-semibold">Life Span:</span>{" "}
              {breed.life_span} years
            </li>
            <li>
              <span className="font-semibold">Weight:</span>{" "}
              {breed.weight.metric} kg ({breed.weight.imperial} lbs)
            </li>
            <li>
              <span className="font-semibold">Height:</span>{" "}
              {breed.height.metric} cm ({breed.height.imperial} inches)
            </li>
            {breed.bred_for && (
              <li>
                <span className="font-semibold">Bred For:</span>{" "}
                {breed.bred_for}
              </li>
            )}
            {breed.breed_group && (
              <li>
                <span className="font-semibold">Breed Group:</span>{" "}
                {breed.breed_group}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DogDetails;
