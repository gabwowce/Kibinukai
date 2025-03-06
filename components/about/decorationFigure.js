
import Image from "next/image";
export default function DecorationFigure({img, alt, className}){
    return(
        <figure className={`${className} flex py-5`}>
            <Image src={img} width={600} height={400} alt={alt} className="rounded-lg" />
        </figure>
    );
}

