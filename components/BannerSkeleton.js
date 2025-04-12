export default function BannerSkeleton() {
    return (
      <section className="relative container w-full">
        {/* Desktop skeleton */}
        <div className="hidden md:block relative w-full ">
          <div className="w-full relative xl:rounded-3xl overflow-hidden">
            <div className="animate-pulse bg-gray-200" style={{ width: "100%", height: "333px" }} />
          </div>
        </div>
  
        {/* Mobile skeleton */}
        <div className="block md:hidden relative w-full">
          <div className="w-full relative overflow-hidden">
            <div className="animate-pulse bg-gray-200" style={{ width: "100%", height: "453px" }} />
          </div>
        </div>
  
        {/* Dots skeleton */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-400 animate-pulse"
            />
          ))}
        </div>
      </section>
    );
  }
  

  export function BannerStaticSkeleton() {
    return (
      <div className="relative w-full overflow-hidden rounded-3xl animate-pulse bg-gray-200">
        {/* Desktop */}
        <div className="hidden md:block w-full h-[333px] bg-gray-200" />
        
        {/* Mobile */}
        <div className="block md:hidden w-full h-[453px] bg-gray-200" />
      </div>
    );
  }
  