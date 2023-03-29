import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

  const [service, setService]=useState([]);
  useEffect(()=>{
    fetch('https://food-service-server-eight.vercel.app/service')
    .then(res=>res.json())
    .then(data=> setService(data))
  },[])
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-5'>Food Services</h1>
      <p className='text-semibold text-center text-black pt-2'>Food Service, we are committed to helping your business flourish. <br /> In addition, we promise to strengthen the communities we serve.</p>
      <div className='grid gap-4 m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          service.slice(0,3).map(food=> (
            <ServiceCard
            key={food._id}
            food={food}
            >

            </ServiceCard>
          ))
        }
      </div>
      <div className="card-actions justify-center m-5">
      <Link to={{pathname:'/service',food:service}}  className="btn btn-secondary-focus">See More</Link>
      </div>

    </div>
  );
};

export default Services;