import React from 'react'
import { useNavigate, Form } from 'react-router-dom'
import {Form as CustomerForm} from '../components/Form'

export function action(){
  console.log('here action')
}


const NewCustomer = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New customer</h1>
      <p className='mt-3'>Fill in all the fields to register a new customer.</p>
      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:bg-blue-700 '
          onClick={() => navigate('/')}
        >Back</button>
      </div>
      <div className='bg-white shadow rounded-md  md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <Form
          method='post'>
        <CustomerForm />
        <input
          type='submit'
          className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
          value='Register customer'></input>
        </Form>
      </div>
    </>
  )
}

export default NewCustomer
