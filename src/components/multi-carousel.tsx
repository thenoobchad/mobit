"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {
  const responsive = {
  
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      containerClass="text-white h-1/2"
      itemClass="mr-[10px] max-w-[400px] lg:max-w-full lg:mr-[20px]"
      transitionDuration={500}
      autoPlaySpeed={3000}
           autoPlay={true}
      infinite={true}
      centerMode={true}
      arrows={false}
    >
      <div className="bg-accent p-4 rounded">
        <p className="text-xs mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          error repudiandae repellendus mollitia iste deserunt corporis.
        </p>
        <div className="relative flex flex-col gap-1 border-t border-zinc-300">
          <h1 className="pt-2 text-sm font-semibold">marry</h1>
          <p className="text-sm">CEO of Fahad Insustries</p>
          <div className="absolute -top-4 right-0 h-10 w-10 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div className="bg-accent p-4 rounded ">
        <p className="text-xs mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          error repudiandae repellendus mollitia iste deserunt corporis.
        </p>
        <div className="relative flex flex-col gap-1 border-t border-zinc-300">
          <h1 className="pt-2 text-sm font-semibold">renolds</h1>
          <p className="text-sm">CEO of Fahad Insustries</p>
          <div className="absolute -top-4 right-0 h-10 w-10 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div className="bg-accent p-4 rounded ">
        <p className="text-xs mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          error repudiandae repellendus mollitia iste deserunt corporis.
        </p>
        <div className="relative flex flex-col gap-1 border-t border-zinc-300">
          <h1 className="pt-2 text-sm font-semibold">touch</h1>
          <p className="text-sm">CEO of Fahad Insustries</p>
          <div className="absolute -top-4 right-0 h-10 w-10 rounded-full bg-zinc-700" />
        </div>
      </div>
      
      <div className="bg-accent p-4 rounded ">
        <p className="text-xs mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          error repudiandae repellendus mollitia iste deserunt corporis.
        </p>
        <div className="relative flex flex-col gap-1 border-t border-zinc-300">
          <h1 className="pt-2 text-sm font-semibold">jerry</h1>
          <p className="text-sm">CEO of Fahad Insustries</p>
          <div className="absolute -top-4 right-0 h-10 w-10 rounded-full bg-zinc-700" />
        </div>
      </div>
    </Carousel>
  );
};
