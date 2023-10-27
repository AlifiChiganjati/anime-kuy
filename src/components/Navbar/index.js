import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <nav className="flex justify-between flex-col md:flex-row p-4 gap-2">
        <Link href="/" className="text-2xl font-bold text-white">
          AnimeKuy
        </Link>
        <input type="search" placeholder="Cari anime..." />
      </nav>
    </header>
  );
};

export default Navbar;
