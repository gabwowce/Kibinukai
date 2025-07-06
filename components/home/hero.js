import Bubble from "../decoration/bubble";
import Kibinukai from "../decoration/kibinukas";
import Button from "../ui/button/button";
import { Messages } from "../ui/message";
import Image from "next/image";
import Link from "next/link"; // IMPORTUOJAME NEXT/LINK

const groupKibinai = "/assets/groupKibinai2.png";

export default function Hero() {
  return (
    <section
      className="relative z-10 flex flex-col-reverse md:flex-row container mx-auto 
                        lg:gap-0 xl:gap-0 2xl:gap-36 pb-5 md:pb-30 xl:pb-32 2xl:pb-52 "
    >
      <Bubble />
      <Image
        src={groupKibinai}
        alt="Group of Kibinai"
        width={300}
        height={300}
        sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
        priority
        className="hidden md:block absolute top-[-55px] left-[-50px] md:left-[-80px] lg:left-[-100px] w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        draggable="false"
      />

      <div className="w-full md:w-1/2 xl:w-1/2">
        <div className="relative flex flex-col items-start justify-center py-10 md:py-0 h-auto md:h-[360px] lg:h-[500px]">
          <h1 className="pb-5">
            Paragauk tikro &nbsp;
            <span className="font-display font-bold text-outrageous-orange-400 drop-shadow-custom ">
              SKONIO
            </span>
          </h1>
          <p className="text-h4 md:text-h3 pb-10">
            Užtikrinta kokybė ir šviežumas. Kapota mėsa, rankų darbo tešla –
            tikras skonis visoje Lietuvoje
          </p>

          <div className="flex flex-col w-full md:flex-row gap-4">
            {/* Užsisakyti mygtukas - veda į /contacts */}
            <Link href="/contacts" passHref>
              <Button cornerDecoration fullWidth>
                Užsisakyti
              </Button>
            </Link>

            {/* Meniu mygtukas - veda į /menu */}
            <Link href="/menu" passHref>
              <Button fullWidth variant="outlined">
                Meniu
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/2 flex flex-col items-end justify-center">
        <Messages />
        <div className="w-[360px] xs:w-[390px] md:w-[400px] lg:w-full -pt-5 md:pt-0">
          <Kibinukai />
        </div>
      </div>
    </section>
  );
}
