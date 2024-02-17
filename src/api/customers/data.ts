
import type { Customer } from 'src/types/customer';
import axios from 'axios';

const now = new Date();


export const getAllCustomers = async (): Promise<Customer[]> => {
	const customers = await axios.get( import.meta.env.VITE_APP_BASE_URL + "/users" )
	return customers.data?.data
}

export const getSingleCustomer = async ( id: string ): Promise<Customer> => {
	const customer = await axios.get( import.meta.env.VITE_APP_BASE_URL + "/users/" + id )
	console.log( "customer =>", customer.data?.data )
	return customer.data?.data
}
