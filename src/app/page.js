import Card from "@/components/Card";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=8`,
  );

  const anime = await response.json();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link
          href={"/Populer"}
          className="underline hover:text-indigo-500 text-sm md:text-xl transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <Card
                id={data.mal_id}
                img={data.images.webp.image_url}
                title={data.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
