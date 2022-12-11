import React from 'react'
import {useNavigate, Form, redirect} from 'react-router-dom'
import {deleteCustomer} from '../data/customers'

export async function action({params}){
  await deleteCustomer(params.customerId)
  return redirect('/')
}

const Customer = ({customer}) => {

  const navigate = useNavigate()
  let { id, firstname, surname, phone, email, company, country } = customer

  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800 '>
          {firstname}
          <span className='font-semibold'> {surname}</span>
          </p>
        <p className='text-gray-400 '>{company}</p>
      </td>
      <td className='p-6'>
        <p className='text-xl text-gray-800'>{country}</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-semibold'>Email: </span>
          {email}
        </p>
        <p className='text-gray-600'>
          <span className='text-gray-800 uppercase font-semibold'>Phone: </span>
          {phone}
        </p>
      </td>
      <td className='p-6 flex gap-3'>
        <button
          type='button'
          className='text-blue-700 hover:text-blue-600 uppercase font-bold text-xs'
          onClick={()=> navigate(`/customers/${id}`)}
        >Edit</button>

        <Form
        method='POST'
          action={`/customers/${id}/delete`}
          onSubmit={(e)=> {
            !confirm('Are you sure you want to delete customer?') && e.preventDefault()
          }}>
          <button
            type='submit'
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
          >Delete</button>
        </Form>
        
      </td>
    </tr>
  )
}

export default Customer
