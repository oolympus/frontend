export interface LoanItem {
	id: string;
	billingCycle: 'daily' | 'weekly' | 'monthly' | 'yearly';
	currency: string;
	name: string;
	quantity: number;
	unitAmount: number;
}

export type LoanStatus = 'cancelled' | 'complete' | 'pending' | 'rejected';

export interface Loan {
	id: string;
	borrowed_by: string;
	reviewed_by: string;
	loan_status: LoanStatus;
	guarantors: any;
	principal: string;
	percent_interest: number;
	interest: string;
	amount_payable: string;
	fines_accumulated: string;
	cumulative_payments: string;
	balance_payable: string;
	payment_intervals: string;
	application_time: string;
	review_notes: string;
	review_time: string;
	due_date: string;
	edited_at: string;
	disbursed_amount: string;
	disbursed_date: string;
	comments: any;
	disbursed_by: string;
}
