"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
   
      <Carousel
        responsive={responsive}
        draggable={false}
        showDots={true}
        ssr
        transitionDuration={500}
        autoPlaySpeed={1000}
        className="h-1/2 mx-4"
        infinite={true}
      >
          <div className="h-full w-full flex flex-col justify-center gap-4 bg-accent p-4 text-white">
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error repudiandae repellendus mollitia iste deserunt corporis.</p>
              <div className="flex flex-col gap-1 border-t border-zinc-300 relative">
                  <h1 className="text-sm pt-2 font-semibold">Fahad Mills</h1>
                  <p className="text-sm" >CEO of Fahad Insustries</p>
                  <div className="h-10 w-10 bg-zinc-700 absolute -top-4 right-0 rounded-full"/>
              </div>
        </div>
         <div className="h-full w-full flex flex-col justify-center gap-4 bg-accent p-4 text-white">
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error repudiandae repellendus mollitia iste deserunt corporis.</p>
              <div className="flex flex-col gap-1 border-t border-zinc-300 relative">
                  <h1 className="text-sm pt-2 font-semibold">Fahad Mills</h1>
                  <p className="text-sm" >CEO of Fahad Insustries</p>
                  <div className="h-10 w-10 bg-zinc-700 absolute -top-4 right-0 rounded-full"/>
              </div>
        </div>
         <div className="h-full w-full flex flex-col justify-center gap-4 bg-accent p-4 text-white">
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error repudiandae repellendus mollitia iste deserunt corporis.</p>
              <div className="flex flex-col gap-1 border-t border-zinc-300 relative">
                  <h1 className="text-sm pt-2 font-semibold">Fahad Mills</h1>
                  <p className="text-sm" >CEO of Fahad Insustries</p>
                  <div className="h-10 w-10 bg-zinc-700 absolute -top-4 right-0 rounded-full"/>
              </div>
          </div>
           <div className="h-full w-full flex flex-col justify-center gap-4 bg-accent p-4 text-white">
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam error repudiandae repellendus mollitia iste deserunt corporis.</p>
              <div className="flex flex-col gap-1 border-t border-zinc-300 relative">
                  <h1 className="text-sm pt-2 font-semibold">Fahad Mills</h1>
                  <p className="text-sm" >CEO of Fahad Insustries</p>
                  <div className="h-10 w-10 bg-zinc-700 absolute -top-4 right-0 rounded-full"/>
              </div>
        </div>
      </Carousel>
 
  );
};
