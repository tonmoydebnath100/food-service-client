import React from 'react';

const ReviewCart = ({r}) => {
  return (
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
          <th>User</th>
          <th>Reviews</th>
          
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              
              <div>
                <div className="font-bold">{r.user}</div>
              </div>
            </div>
          </td>
          <td>
            {r.reveiw}
            <br/>
          </td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
        
      </tbody>
      
    </table>
  </div>
  );
};

export default ReviewCart;