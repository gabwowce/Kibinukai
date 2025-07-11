import Image from "next/image";
import Link from "next/link";
const logoBlack = "/assets/logo1.png";
const logoWhite = "/assets/logo2.png";

export default function Logo({ white }) {
  return (
    <Link href="/">
      <Image
        src={white ? logoWhite : logoBlack}
        alt="Kibinukai logo"
        width={130}
        height={60}
        priority
        sizes="(max-width: 768px) 100px, 130px"
        className="w-[100px] md:w-[130px] h-auto"
      />
    </Link>
  );
}
