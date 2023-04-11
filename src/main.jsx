import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import FeaturedJobDetail from './Components/FeaturedJobDetail/FeaturedJobDetail';
import { getJobData } from './Loaders/getJobData';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('/public/feature-jobs.json')
      },
      {
        path:'/featuredJobs/:id',
        element: <FeaturedJobDetail></FeaturedJobDetail>,
        loader: ({params}) => fetch("/public/feature-jobs.json")
      },
      {
        path:"/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: getJobData
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      },
      {
        path: "*",
        element: <Error></Error>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
