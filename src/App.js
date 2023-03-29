import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';
import Login from './Login/Login';
import Signup from './SignUp/Signup';
import Allservices from './pages/Allservices';
import Checkout from './pages/Checkout';
import Review from './pages/Review';
import Order from './pages/Order';
import AddService from './pages/AddService';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Blog from './pages/Blog';

function App() {
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/service',
          element:<Allservices></Allservices>
        },
        {
          path:'/review/:id',
          element:<Review></Review>,
          loader: ({params})=> fetch(`https://food-service-server-eight.vercel.app/service/${params.id}`)
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`https://food-service-server-eight.vercel.app/service/${params.id}`)
        },
        {
          path:'/order/:email',
          element:<PrivateRoute><Order></Order></PrivateRoute>,
          loader: ({params})=> fetch(`https://food-service-server-eight.vercel.app/order/${params.email}`)
        },
        {
          path:'/addservice',
          element:<AddService></AddService>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
      ]
    }
  ])
  return (
    <div data-theme="cupcake" className='max-w-screen-xl	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
