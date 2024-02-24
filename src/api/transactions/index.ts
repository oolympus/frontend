import axios from 'axios';
import type { Transaction } from 'src/types/transaction';

type GetTransactionsRequest = {
	filters?: {
		name?: string;
		category?: string[];
		status?: string[];
		inStock?: boolean;
	};
	page?: number;
	rowsPerPage?: number;
};

type GetTransactionsResponse = Promise<{
	data: Transaction[];
	count: number;
}>;

class TransactionsApi {
	async getTransactions( _request: GetTransactionsRequest = {} ): GetTransactionsResponse {

		const response = await axios.get( import.meta.env.VITE_APP_BASE_URL + '/transactions' );

		const data = response.data?.data
		const count = data.length;


		return Promise.resolve( {
			data,
			count,
		} );
	}
}

export const transactionsApi = new TransactionsApi();
