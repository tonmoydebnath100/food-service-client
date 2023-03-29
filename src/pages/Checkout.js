import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ReviewCart from './ReviewCart';

const Checkout = () => {
  const {user}=useContext(AuthContext);
  const {_id,title,img,details,price}= useLoaderData();
  const [review,setReview]=useState([]);
  const handleOrder=event=>{
    event.preventDefault();
    const order={
      foodid:_id,
      img,
      title,
      price,
      email:user.email
    }
    fetch('https://food-service-server-eight.vercel.app/order',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then (data=> {console.log(data)
      if(data.acknowledged){
        alert('added to the card successfully');
      }
    })
    .catch(err=> console.error(err))
  }
  useEffect(()=>{
    fetch(`https://food-service-server-eight.vercel.app/review/${_id}`)
    .then(res=>res.json())
    .then(data=>setReview(data))
    
  },[])
  
  return (
    <div>
          <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6">{details}</p>
              <button onClick={handleOrder} className="btn btn-secondary-focus m-3">Buy Now</button>
              <Link to={`/review/${_id}`} className="btn btn-secondary-focus">Review</Link>
            </div>
          </div>
        </div>
  <div>
    <h1 className='text-5xl text-center mt-5 mb-3'>Reviews</h1>
  </div>
      {
        review.map(r=>(
          <ReviewCart
          key={r._id}
          r={r}
          >

          </ReviewCart>
        ))
      }
    </div>
    
  );
};

export default Checkout;