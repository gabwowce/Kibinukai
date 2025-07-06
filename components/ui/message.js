import Image from "next/image";

const star = "/assets/home/star.png";
const phoneIcon = "/assets/home/phone.png";

export function MessageFrame({ children, className }) {
  return (
    <figure
      className={`bg-white-transparent70 shadow-custom ${className}`}
      style={{
        borderRadius: "16px 16px 16px 0px",
      }}
    >
      {children}
    </figure>
  );
}

export function OrderNow() {
  return (
    <MessageFrame className="inline-flex items-center px-3 pt-3 pb-2 lg:px-6 lg:pt-5 lg:pb-3 space-x-2 lg:space-x-4">
      {/* Phone Icon */}
      <div className="flex-shrink-0">
        <Image
          src={phoneIcon}
          alt="Yellow phone call icon"
          width={64}
          height={64}
          className="w-10 h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <h3>Užsisakyk jau dabar!</h3>
        <span className="text-outrageous-orange-400 text-h2 font-display font-bold -mt-2 xl:-mt-4">
          +370 68020087
        </span>
      </div>
    </MessageFrame>
  );
}

export function Rating() {
  return (
    <MessageFrame className="flex flex-col items-start px-3 py-2 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
      <div>
        <p className="text-h3">Kibinukai</p>
      </div>
      <div className="inline-flex items-center justify-center space-x-1 lg:space-x-2">
        <Image
          src={star}
          alt=""
          width={24}
          height={24}
          className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
        <Image
          src={star}
          alt=""
          width={24}
          height={24}
          className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
        <Image
          src={star}
          alt=""
          width={24}
          height={24}
          className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
        <Image
          src={star}
          alt=""
          width={24}
          height={24}
          className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
        <Image
          src={star}
          alt=""
          width={24}
          height={24}
          className="w-4 h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
        />
        <p className="text-gray-500 text-h4 pt-1">4,6</p>
      </div>
    </MessageFrame>
  );
}
export function Messages() {
  return (
    <div className="flex flex-col items-start lg:items-end w-full pt-5 md:pt-0">
      <div className="relative z-20 min-w-[235px] ml-5 xs:ml-16 lg:ml-0">
        <OrderNow />
      </div>

      <div className="relative lg:-mt-2 xl:-mt-4 z-10 lg:self-start  xl:pl-0 2xl:pl-10">
        <Rating />
      </div>
    </div>
  );
}
