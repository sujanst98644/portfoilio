import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from "../data"
import Meow from './new';

const Services = () => {
    const cards = data.map(item=>{
        return (
            <Meow 
            item ={item}
            />
        )
    }
    )
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <main className="my-5 text-white font-sora font-semibold text-2xl">
      <h1 className="mx-11 font-sora text-3xl font-semibold mb-4 text-black">SERVICES</h1>
      <Carousel responsive={responsive} infinite={true} autoPlaySpeed={1000}>
        {cards}
      </Carousel>
    </main>
  );
};

export default Services;
