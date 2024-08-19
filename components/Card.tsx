import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Card: FC<TCard> = ({ id, picUrl, breedName, category }) => {
  return (
    <Link
      href={`/breeds/${category}/${id}`}
      className="p-4 bg-white rounded-lg shadow-md hover:bg-blue-100 hover:border-2 hover:border-white hover:shadow-blue-300 hover:cursor-pointer"
    >
      <Image
        src={picUrl}
        alt={breedName}
        loading="lazy"
        width={400}
        height={400}
        className="rounded-t-lg object-cover w-full h-auto"
      />
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold">{breedName}</h3>
        <p className="text-gray-500 text-sm">{category}</p>
      </div>
    </Link>
  );
};

export default Card;
