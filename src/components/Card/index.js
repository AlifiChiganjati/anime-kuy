import Image from "next/image";
import Link from "next/link";

const Card = ({ id, img, title }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={img}
        alt="..."
        width={350}
        height={350}
        className=" max-h-64 h-full  max-w-64 w-full transition duration-500 ease-in-out object-cover hover:scale-105"
      />
      <h3 className="text-md  md:text-xl font-bold p-4">{title}</h3>
    </Link>
  );
};

export default Card;
