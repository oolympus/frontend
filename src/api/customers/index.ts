import type { Customer } from 'src/types/customer';
import { applyPagination } from 'src/utils/apply-pagination';
import { applySort } from 'src/utils/apply-sort';

import { getAllCustomers, getSingleCustomer } from './data';

type GetCustomersRequest = {
	filters?: {
		query?: string;
		isActive?: boolean;
		is_previously_logged_in?: boolean;
	};
	page?: number;
	rowsPerPage?: number;
	sortBy?: string;
	sortDir?: 'asc' | 'desc';
};

type GetCustomersResponse = Promise<{
	data: Customer[];
	count: number;
}>;

type GetCustomerRequest = object;

type GetCustomerResponse = Promise<Customer>;

class CustomersApi {
	async getCustomers( request: GetCustomersRequest = {} ): GetCustomersResponse {
		const { filters, page, rowsPerPage, sortBy, sortDir } = request;

		let data = await getAllCustomers();
		let count = data.length;

		if ( typeof filters !== 'undefined' ) {
			data = data.filter( ( customer ) => {
				if ( typeof filters.query !== 'undefined' && filters.query !== '' ) {
					let queryMatched = false;
					const properties: ( 'email' | 'first_name' )[] = ['email', 'first_name'];

					properties.forEach( ( property ) => {
						if ( customer[property].toLowerCase().includes( filters.query!.toLowerCase() ) ) {
							queryMatched = true;
						}
					} );

					if ( !queryMatched ) {
						return false;
					}
				}

				if ( typeof filters.isActive !== 'undefined' ) {
					if ( customer.is_active !== filters.isActive ) {
						return false;
					}
				}

				return true;
			} );
			count = data.length;
		}

		if ( typeof sortBy !== 'undefined' && typeof sortDir !== 'undefined' ) {
			data = applySort( data, sortBy, sortDir );
		}

		if ( typeof page !== 'undefined' && typeof rowsPerPage !== 'undefined' ) {
			data = applyPagination( data, page, rowsPerPage );
		}

		return Promise.resolve( {
			data,
			count,
		} );
	}

	async getCustomer( customerId: string ): GetCustomerResponse {

		const data = await getSingleCustomer( customerId )

		return Promise.resolve( {
			...data
		} )
	}
}

export const customersApi = new CustomersApi();
