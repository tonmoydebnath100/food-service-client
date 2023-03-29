import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCard from './OrderCard';

const Order = () => {
  const orders=useLoaderData();
  const total=0;

  return (
    
    <div>
      <div className='text-center m-5'>
        <h1 className='text-4xl text-bold'>Order Cart</h1>
      </div>
  <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    
    {
        orders.map(order=>(
          <OrderCard
          key={order._id}
          order={order}
          
          >

          </OrderCard>
        ))
      }
    
      

      </table>
      </div>

    </div>
  );
};

export default Order;