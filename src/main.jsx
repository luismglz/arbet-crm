import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NewCustomer,{action as newCustomerAction} from './pages/NewCustomer'
import Index, {loader as customersLoader} from './pages/Index'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: customersLoader
      },
      {
        path: '/customers/new',
        element: <NewCustomer/>,
        action: newCustomerAction
      }
    ]
  },
  {
    path:'/*',
    element:<h1 className='text-6xl'>404</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
