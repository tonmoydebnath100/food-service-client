import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Review = () => {
  const {_id,title}= useLoaderData();
  const {user}= useContext(AuthContext);
  const handleSubmit=event=>{
    event.preventDefault();
    const form=event.target;
    const review=form.review.value;
    const reviewinfo={
      foodid: _id,
      foodname:title,
      user: user.email,
      reveiw: review,
  
    }
    console.log(reviewinfo);
    fetch('https://food-service-server-eight.vercel.app/review',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewinfo)
    })
    .then(res=>res.json())
    .then (data=> {console.log(data)
      if(data.acknowledged){
        alert('review added successfully');

        form.reset();
      }
    })
    .catch(err=> console.error(err))

  }
  
  return (
    <div>
      <h1 className='text-4xl m-3'>Add a review</h1>
      <form onSubmit={handleSubmit}>
      <div className='m-5'>
        <textarea name='review' className="textarea textarea-secondary w-full" placeholder="review" required></textarea>
      </div>
      <input type="submit" className='btn m-4' value="Add"/>
      </form>
    </div>
  );
};

export default Review;