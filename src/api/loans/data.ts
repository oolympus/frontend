import { faker } from '@faker-js/faker';
import { Loan } from 'src/types/loan';

const now = new Date();

export const generateFakeLoans = (count: number): Loan[] => {
	const loans: Loan[] = [];

	for (let i = 0; i < count; i++) {
		const loan: Loan = {
			id: faker.string.numeric(5),
			borrowed_by: faker.internet.email(),
			reviewed_by: faker.internet.email(),
			loan_status: faker.helpers.arrayElement(['canceled', 'complete', 'pending', 'rejected']),
			guarantors: null,
			principal: faker.finance.amount(),
			percent_interest: 10,
			interest: faker.finance.amount(),
			amount_payable: faker.finance.amount(),
			fines_accumulated: faker.finance.amount(),
			cumulative_payments: faker.finance.amount(),
			balance_payable: faker.finance.amount(),
			payment_intervals: faker.helpers.arrayElement(['monthly', 'yearly', 'quarterly']),
			application_time: faker.date.past().toISOString(),
			review_notes: faker.lorem.words(),
			review_time: faker.date.recent().toISOString(),
			due_date: faker.date.future().toLocaleDateString(),
			edited_at: faker.date.recent().toLocaleDateString(),
			disbursed_amount: faker.finance.amount(),
			disbursed_date: faker.date.recent().toISOString(),
			comments: {},
			disbursed_by: faker.string.numeric(5),
		};

		loans.push(loan);
	}

	return loans;
};

export const loans: Loan[] = generateFakeLoans(20);
