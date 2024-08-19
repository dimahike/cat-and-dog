import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`);

    if (!response.ok) {
      return NextResponse.json({ error: "Breed not found" }, { status: 404 });
    }

    const data: DogBreed = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch breed details" },
      { status: 500 },
    );
  }
}
