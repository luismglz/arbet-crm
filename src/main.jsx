import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewCustomer, { action as newCustomerAction } from './pages/NewCustomer'
import EditCustomer, { loader as editCustomerLoader, action as editCustomerAction } from './pages/EditCustomer'
import Index, { loader as customersLoader } from './pages/Index'
import Error from './pages/Error'
import { action as deleteCustomerAction} from './components/Customer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <Error />
      },
      {
        path: '/customers',
        element: <NewCustomer />,
        action: newCustomerAction,
        errorElement: <Error/>
      },
      {
        path: '/customers/:customerId/',
        element: <EditCustomer />,
        loader: editCustomerLoader,
        errorElement: <Error/>,
        action: editCustomerAction
      },
      {
        path: '/customers/:customerId/delete',
        action: deleteCustomerAction
      }
    ]
  },
  {
    path: '/*',
    element: <h1 className='text-6xl'>404</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
