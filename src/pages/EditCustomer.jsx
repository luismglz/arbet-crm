import { useLoaderData } from 'react-router-dom';
import{getCustomerById} from '../data/customers'

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
  return (
    <div>EditCustomer
    </div>
    
  )
}




export default EditCustomer
