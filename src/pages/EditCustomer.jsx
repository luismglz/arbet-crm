import { useLoaderData } from 'react-router-dom';
import{getCustomerById} from '../data/customers'
import {Form, useNavigate} from 'react-router-dom'
import { Form as CustomerForm } from '../components/Form'

export async function loader({ params }) {
  const customer = await getCustomerById(params.customerId);
  if (Object.values(customer).length === 0){
    throw new Response('',{
      status: 404,
      statusText: "Customer not found"
    })
  }

  return customer;

}

function EditCustomer() {

  const navigate = useNavigate()

  const customer = useLoaderData()
console.log(customer)

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Edit customer</h1>
      <p className='mt-3'>Set customer's new data down bellow</p>
      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase hover:bg-blue-700 '
          onClick={() => navigate('/')}
        >Back</button>
      </div>
      <div className='bg-white shadow rounded-md  md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {/* {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)} */}
        <Form
          noValidate
          method='post'>
          <CustomerForm customer={customer}/>
          <input
            type='submit'
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value='Save changes'></input>
        </Form>
      </div>
    </>
    
  )
}




export default EditCustomer
