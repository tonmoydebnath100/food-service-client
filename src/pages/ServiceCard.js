import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({food}) => {

  return (
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={food.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food.title}</h2>
    <p className='font-bold text-secondary'>Price: {food.price} BDT</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${food._id}`}>
      <button className="btn btn-secondary-focus">View Details</button>
      </Link>
    </div>
  </div>
  </div>
  );
};

export default ServiceCard;