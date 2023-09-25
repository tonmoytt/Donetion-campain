import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/headerall/Header';
import Home from './component/headerall/home/Home';
import Statistics from './component/headerall/Statistics/Statistics';
import Donation from './component/headerall/donation/Donation';
import Errrror from './Json/Errrror/Errrror';
import Datashow from './Json/datashow/Datashow';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement: <Errrror></Errrror>,
    loader: () => fetch('data.json'),
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/search',

      },
      {
        path:'/data/:id',
        element:<Datashow></Datashow>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


