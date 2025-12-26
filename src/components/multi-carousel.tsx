"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
       },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };      
  return (
      <Carousel
      responsive={responsive}
                    draggable={false}
          showDots={true}
          ssr
          transitionDuration={500}
          autoPlaySpeed={1000}
          dotListClass="custom-dot-list-style"
         className="h-[300px] w-full flex justify-center items-center"
          infinite={true}
      >
      <div className="w-full h-full">carousel item 1</div>
      <div>carousel item 2</div>
      <div>carousel item 3</div>
    </Carousel>
  )
}
