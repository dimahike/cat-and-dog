import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);

    if (!response.ok) {
      return NextResponse.json({ error: "Breed not found" }, { status: 404 });
    }

    const data: CatBreedDetails = await response.json();

    const transformedData = {
      id: data.id,
      name: data.name,
      reference_image_id: data.reference_image_id,
      description: data.description,
      temperament: data.temperament,
      origin: data.origin,
      life_span: data.life_span,
      weight: {
        imperial: data.weight.imperial,
        metric: data.weight.metric,
      },
      cfa_url: data.cfa_url,
      vetstreet_url: data.vetstreet_url,
      vcahospitals_url: data.vcahospitals_url,
      wikipedia_url: data.wikipedia_url,
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch breed details" },
      { status: 500 },
    );
  }
}
