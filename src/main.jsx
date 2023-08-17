import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Dashboard from './Component/Dashboard/Dashboad';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: ([
      {
        path:'/',
        element:<Dashboard></Dashboard>,
        children:([
          {
            path:'/',
            element:<Home></Home>,
          },
        ])
      },
      
    ])
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
