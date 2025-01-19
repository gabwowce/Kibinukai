import Bubble from "../decoration/bubble";
import Kibinukai from "../decoration/kibinukas";
import Button from "../ui/button/button";
import { Messages } from "../ui/message";
import groupKibinai from "@/public/assets/groupKibinai2.png";
import Image from "next/image";


export default function Hero(){
    return(
        <section className="relative z-10 flex flex-col-reverse md:flex-row container mx-auto h-max-[50rem] 
                            lg:gap-0 xl:gap-0 2xl:gap-36 pb-5 md:pb-30 xl:pb-32 2xl:pb-52 xl:py-10">
                <Bubble />
                <Image
                  src={groupKibinai}
                  alt="Group of Kibinai"
                  className="hidden md:block absolute top-[-55px] left-[-50px] md:left-[-80px] lg:left-[-100px] w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
                />
                <div className="w-full md:w-1/2 xl:w-1/2">
                  <div className="relative flex flex-col items-start justify-center py-10 md:py-0 h-autos md:h-[360px] lg:h-[500px]">
                 
                    <h1 className="pb-10 ">
                      Patys patys skaniausi&nbsp;
                      <span className="font-display font-bold text-outrageous-orange-400 drop-shadow-custom">KIBINAI</span>
                    </h1>
                    <p className="text-h3 pb-10">
                      Polimori kolima aparastas hfkrok musu kurlsmifhshankfl ask akd hahanastytus
                    </p>
                    
                    <div className="flex flex-col w-full md:flex-row gap-4">
                      <Button cornerDecoration fullWidth>
                        Užsisakyti  
                      </Button>
                      <Button fullWidth variant="outlined">
                        Menu  
                      </Button>
                    </div> 
                    
                  </div>
                </div>
                
        
        
                <div className="w-full md:w-1/2 xl:w-1/2 flex flex-col items-end justify-center">
                  <Messages/>
                  <div className="w-[360px] xs:w-[390px] md:w-[400px] lg:w-full -pt-5 md:pt-0">
                    <Kibinukai/>
                  </div>
                    
                </div>
                
        
        </section>
    );
}