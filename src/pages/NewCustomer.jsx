import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import {Form as CustomerForm} from '../components/Form'
import Error from '../components/Error'
import {addCustomer} from '../data/customers'

export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const email = formData.get('email');

  //validate
  const errors = [];
  if(Object.values(data).includes('')){
    errors.push('All fields are required')
  }

  let regexEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  !regexEmail.test(email) && errors.push('Email is not valid')

  if(Object.keys(errors).length){
    return errors;
  }

  await addCustomer(data)

  return redirect('/')
}


const NewCustomer = () => {

  const errors = useActionData();
  const navigate = useNavigate();

  console.log(errors);

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
        {errors?.length && errors.map((error, i)=><Error key={i}>{error}</Error>)}
        <Form
          noValidate
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
