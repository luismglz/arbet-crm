import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Customers } from '../services/utils/Customers';

export function loader() {

  return Customers;
}

export const Index = () => {

  const customers = useLoaderData();
  console.log(customers)

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
      <p className='mt-3'>Manage your customers</p>
    </>
  )
}

export default Index