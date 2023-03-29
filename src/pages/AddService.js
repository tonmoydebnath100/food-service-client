import React from 'react';

const AddService = () => {
  const handleSubmit=event=>{
    event.preventDefault();
    const form=event.target;
    const title=form.title.value;
    const img= form.img.value;
    const price=form.price.value;
    const details=form.details.value;

    const service={
      title,
      img,
      price,
      details
    }
    fetch('https://food-service-server-eight.vercel.app/foods',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
    .then(res=>res.json())
    .then (data=> {console.log(data)
      if(data.acknowledged){
        alert('service added successfully');

        form.reset();
      }
    })
    .catch(err=> console.error(err))

  }
  return (
    <div>
      <div>
        <h1 className='text-3xl text-center'>Add A New Service</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='m-2'>
          <h1 className='text-bold m-3'>Title</h1>
          <input name='title' type="title" placeholder="title" className="input w-full max-w-xs m-2" />
        </div>
        <div>
          <h1 className='text-bold m-3'>Image</h1>
          <input name='img' type="img" placeholder="img" className="input w-full max-w-xs m-2" />
        </div><div>
          <h1 className='text-bold m-3'>Price</h1>
          <input name='price' type="price" placeholder="price" className="input w-full max-w-xs m-2" />
        </div>
        <div>
          <h1 className='text-bold m-3'>Details</h1>
          <textarea name='details' type="details" placeholder="details" className="textarea textarea-secondary w-full max-w-xs m-2" />
        </div>
        <div className='m-2'>
          <input className='btn' type='submit' value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddService;