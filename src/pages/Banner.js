import React from 'react';
import img1 from '../images/i1.jpg'
import img2 from '../images/i2.jpg'
import img3 from '../images/i3.jpg'
import img4 from '../images/i4.jpg'
import '../pages/Banner.css'
import BannerItem from './BannerItem';

const bannerData=[
  {
    image:img1,
    prev:4,
    id:1,
    next:2
  },
  {
    image:img2,
    prev:1,
    id:2,
    next:3
  },
  {
    image:img3,
    prev:2,
    id:3,
    next:4
  },
  {
    image:img4,
    prev:3,
    id:4,
    next:1
  }

]

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full">
         {
          bannerData.map(slide=> <BannerItem
           key={slide.id}
           slide={slide}
          >

          </BannerItem>)
         }
      </div>
    </div>
  );
};

export default Banner;