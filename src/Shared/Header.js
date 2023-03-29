import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import logo from '../images/logo.png'
const Header = () => {
  const {user, logout}=useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then()
    .catch();
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              
              {
                user?.email? 
                <li><Link to={`/order/${user.email}`}>Orders</Link></li> : <></>
              }
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
          <img width='40' height='40' className='pb-1.5' src={logo} alt="" />
          <a className="normal-case text-xl">Food Services</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            
            {
                user?.email? 
                <li><Link to={`/order/${user.email}`}>Orders</Link></li> : <></>
            }
            <li><Link to='/blog'>Blog</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?
            <>
            <p className='mr-5'>{user.email}</p>
            <button onClick={handleLogout} className="btn">SignOut</button>
            </>
            :
            <Link to={'\login'} className="btn">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;