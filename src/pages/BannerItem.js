import React from 'react';

const BannerItem = ({slide}) => {
  return (
    <div id={`slide${slide.id}`} className="carousel-item relative w-full">
    <div className='carusel-image'>
    <img src={slide.image} className="w-full" />
    </div>
    <div className="absolute flex justify transform -translate-y-1/2 left-24 top-1/4">
      <h1 className='text-5xl font-bold text-white'>
        Delicious <br />
        Tasty <br />
        and Healthy <br />
        Food Services
      </h1>
    </div>
    <div className="absolute flex justify transform -translate-y-1/2 w-2/5 left-24 top-2/4">
      <p className='text-xl text-white'>Food Service, we are committed to helping your business flourish. In addition, we promise to strengthen the communities we serve</p>
    </div>
    <div className="absolute flex justify transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className="btn btn-secondary mr-5">Button</button>
    <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${slide.prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${slide.next}`}className="btn btn-circle">❯</a>
    </div>
  </div>
  );
};

export default BannerItem;