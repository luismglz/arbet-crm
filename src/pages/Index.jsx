import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Customers } from '../services/utils/Customers';
import Customer  from '../components/Customer';

export function loader() {

  return Customers;
}

export const Index = () => {

  const customers = useLoaderData();
  

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
      <p className='mt-3'>Manage your customers</p>
      {
        customers.length ? (
          <table className='w-full bg-white shadow mt-5 table-auto'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Customer Name</th>
                <th className='p-2'>Country</th>
                <th className='p-2'>Contact</th>
                <th className='p-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                customers.map(customer => (
                  <Customer 
                    customer={customer}
                    key={customer.id}
                    />
                ))
              }
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10">No registered customers</p>
        )
      }
    </>
  )
}

export default Index