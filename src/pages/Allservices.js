import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Allservices = () => {
  const [service, setService]=useState([]);
  useEffect(()=>{
    fetch('https://food-service-server-eight.vercel.app/service')
    .then(res=>res.json())
    .then(data=> setService(data))
  },[])
  return (
    <div className='grid gap-4 m-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          service.map(food=> (
            <ServiceCard
            key={food._id}
            food={food}
            >
            </ServiceCard>
          ))
        }
      </div>
  );
};

export default Allservices;