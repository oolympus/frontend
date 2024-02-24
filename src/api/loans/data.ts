import { Loan } from 'src/types/loan';

import axios from 'axios';

export const getAllLoans = async (): Promise<Loan[]> => {
	const Loans = await axios.get( import.meta.env.VITE_APP_BASE_URL + "/loans" )
	return Loans.data?.data
}

export const getSingleLoan = async ( id: string ): Promise<Loan> => {
	const Loan = await axios.get( import.meta.env.VITE_APP_BASE_URL + "/loans/" + id )
	return Loan.data?.data
}
