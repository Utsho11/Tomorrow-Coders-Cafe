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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('job-category-list.json'),
      },
      {
        path:"/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path:"/blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
