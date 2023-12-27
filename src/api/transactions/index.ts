import { transactions } from 'src/api/transactions/data';
import type { Transaction } from 'src/types/transaction';
import { applyPagination } from 'src/utils/apply-pagination';
import { deepCopy } from 'src/utils/deep-copy';

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
	getTransactions(request: GetTransactionsRequest = {}): GetTransactionsResponse {
		const { filters, page, rowsPerPage } = request;

		let data = deepCopy(transactions) as Transaction[];
		let count = data.length;

		if (typeof filters !== 'undefined') {
			data = data.filter((transaction) => {
				if (typeof filters.name !== 'undefined' && filters.name !== '') {
					const nameMatched = transaction.name.toLowerCase().includes(filters.name.toLowerCase());

					if (!nameMatched) {
						return false;
					}
				}

				// It is possible to select multiple category options
				if (typeof filters.category !== 'undefined' && filters.category.length > 0) {
					const categoryMatched = filters.category.includes(transaction.category);

					if (!categoryMatched) {
						return false;
					}
				}

				// It is possible to select multiple status options
				if (typeof filters.status !== 'undefined' && filters.status.length > 0) {
					const statusMatched = filters.status.includes(transaction.status);

					if (!statusMatched) {
						return false;
					}
				}

				// Present only if filter required
				if (typeof filters.inStock !== 'undefined') {
					const stockMatched = transaction.inStock === filters.inStock;

					if (!stockMatched) {
						return false;
					}
				}

				return true;
			});
			count = data.length;
		}

		if (typeof page !== 'undefined' && typeof rowsPerPage !== 'undefined') {
			data = applyPagination(data, page, rowsPerPage);
		}

		return Promise.resolve({
			data,
			count,
		});
	}
}

export const transactionsApi = new TransactionsApi();
