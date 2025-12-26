import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {

    const responsive = {
       
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };      
  return (
      <Carousel
          
          draggable={false}
          responsive={responsive}
          showDots={true}
          ssr={true}
          transitionDuration={500}
          autoPlaySpeed={1000}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          infinite={true}
      >
      <div>carousel item 1</div>
      <div>carousel item 2</div>
      <div>carousel item 3</div>
    </Carousel>
  )
}
