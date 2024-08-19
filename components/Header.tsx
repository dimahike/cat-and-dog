import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 ">
      <div className="container flex justify-between items-center ">
        <Link
          className="text-white hover:text-blue-300 active:text-blue-600"
          href="/"
        >
          C&D
        </Link>
      </div>
    </header>
  );
};

export default Header;
