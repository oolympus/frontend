import { loans } from './data';
import { deepCopy } from 'src/utils/deep-copy';
import { applyPagination } from 'src/utils/apply-pagination';
import { applySort } from 'src/utils/apply-sort';
import { Loan } from 'src/types/loan';

type GetLoansRequest = {
	filters?: {
		query?: string;
		status?: string;
	};
	page?: number;
	rowsPerPage?: number;
	sortBy?: string;
	sortDir?: 'asc' | 'desc';
};

type GetLoansResponse = Promise<{
	data: Loan[];
	count: number;
}>;

type GetLoanRequest = object;

type GetLoanResponse = Promise<Loan>;

class LoansApi {
	getLoans( request: GetLoansRequest = {} ): GetLoansResponse {
		const { filters, page, rowsPerPage, sortBy, sortDir } = request;

		let data = deepCopy( loans ) as Loan[];
		let count = data.length;

		if ( typeof filters !== 'undefined' ) {
			data = data.filter( ( loan ) => {
				if ( typeof filters.query !== 'undefined' && filters.query !== '' ) {
					// Checks only the loan number, but can be extended to support other fields, such as customer
					// name, email, etc.
					const containsQuery = ( loan.id || '' )
						.toLowerCase()
						.includes( filters.query.toLowerCase() );

					if ( !containsQuery ) {
						return false;
					}
				}

				if ( typeof filters.status !== 'undefined' ) {
					const statusMatched = loan.loan_status === filters.status;

					if ( !statusMatched ) {
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

	getLoan( request?: GetLoanRequest ): GetLoanResponse {
		return Promise.resolve( deepCopy( loans[0] ) );
	}
}

export const loansApi = new LoansApi();
