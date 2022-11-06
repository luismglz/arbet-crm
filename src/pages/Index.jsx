import React from 'react'

export function loader(){

  return 'From loader';
}

export const Index = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
      <p className='mt-3'>Manage your customers</p>
    </>
  )
}

export default Index