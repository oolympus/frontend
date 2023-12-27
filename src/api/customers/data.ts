import { faker } from '@faker-js/faker';
import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';

import type { Customer, CustomerEmail, CustomerInvoice, CustomerLog } from 'src/types/customer';

const now = new Date();

export const getCustomers = (count: number): Customer[] => {
	const customers: Customer[] = [];

	for (let i = 0; i < count; i++) {
		const customer: Customer = {
			id: faker.string.numeric(3),
			last_login: faker.date.past().toLocaleDateString(),
			email: faker.internet.email(),
			first_name: faker.person.firstName(),
			surname: faker.person.lastName(),
			username: faker.internet.userName(),
			telephone: '2567' + faker.string.numeric(8),
			address: faker.location.city(),
			gender: faker.helpers.arrayElement(['M', 'F']),
			date_of_birth: faker.date.past(),
			roles: faker.helpers.arrayElements(['user', 'customer', 'admin'], 1)[0],
			financial_information: faker.finance.accountName(),
			guarantors: faker.helpers.arrayElements(
				[
					'2567' + faker.string.numeric(8),
					'2567' + faker.string.numeric(8),
					'2567' + faker.string.numeric(8),
				],
				2
			),
			password_reset: faker.datatype.boolean(),
			password_reset_time: faker.date.anytime(),
			wrong_password_entry_count: faker.number.int({ min: 1, max: 5 }),
			added_by: faker.person.fullName(),
			date_joined: faker.date.past().toLocaleDateString(),
			is_active: faker.datatype.boolean(),
			is_deleted: faker.datatype.boolean(),
			edited_at: faker.date.past().toLocaleDateString(),
			is_previously_logged_in: true,
			credit_score: faker.number.int({ min: 1, max: 10 }),
		};

		customers.push(customer);
	}

	return customers;
};

export const customer: Customer = {
	id: faker.string.numeric(3),
	last_login: faker.date.past().toLocaleDateString(),
	email: faker.internet.email(),
	first_name: faker.person.firstName(),
	surname: faker.person.lastName(),
	username: faker.internet.userName(),
	telephone: '2567' + faker.string.numeric(8),
	address: faker.location.city(),
	gender: faker.helpers.arrayElement(['M', 'F']),
	date_of_birth: faker.date.past().toLocaleDateString(),
	roles: faker.helpers.arrayElements(['user', 'customer', 'admin'], 1)[0],
	financial_information: faker.finance.accountName(),
	guarantors: faker.helpers.arrayElements(
		[
			'2567' + faker.string.numeric(8),
			'2567' + faker.string.numeric(8),
			'2567' + faker.string.numeric(8),
		],
		2
	),
	password_reset: faker.datatype.boolean(),
	password_reset_time: faker.date.anytime(),
	wrong_password_entry_count: faker.number.int({ min: 1, max: 5 }),
	added_by: faker.person.fullName(),
	date_joined: faker.date.past().toLocaleDateString(),
	is_active: faker.datatype.boolean(),
	is_deleted: faker.datatype.boolean(),
	edited_at: faker.date.past().toLocaleDateString(),
	is_previously_logged_in: true,
	credit_score: faker.number.int({ min: 1, max: 10 }),
};

export const emails: CustomerEmail[] = [
	{
		id: '5ece2ce3613486d95ffaea58',
		createdAt: subDays(subHours(subMinutes(now, 34), 5), 3).getTime(),
		description: 'Loan confirmation',
	},
	{
		id: '5ece2ce8cebf7ad1d100c0cd',
		createdAt: subDays(subHours(subMinutes(now, 49), 11), 4).getTime(),
		description: 'Loan confirmation',
	},
];

export const invoices: CustomerInvoice[] = [
	{
		id: '528651571NT',
		issueDate: now.getTime(),
		status: 'paid',
		amount: 1358.75,
	},
	{
		id: '311658671JR',
		issueDate: now.getTime(),
		status: 'unpaid',
		amount: 1451.75,
	},
];

export const logs: CustomerLog[] = [
	{
		id: '5ece2cfeb6e2ac847bba11ce',
		createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
		description: 'Purchase',
		ip: '84.234.243.42',
		method: 'POST',
		route: '/api/purchase',
		status: 200,
	},
	{
		id: '5ece2d02510484b2952e1e05',
		createdAt: subDays(subMinutes(subSeconds(now, 56), 2), 2).getTime(),
		description: 'Purchase',
		ip: '84.234.243.42',
		method: 'POST',
		route: '/api/purchase',
		status: 522,
	},
	{
		id: '5ece2d08e2748e4e9788901a',
		createdAt: subDays(subMinutes(subSeconds(now, 23), 8), 2).getTime(),
		description: 'Cart remove',
		ip: '84.234.243.42',
		method: 'DELETE',
		route: '/api/transactions/d65654e/remove',
		status: 200,
	},
	{
		id: '5ece2d0c47214e342c2d7f28',
		createdAt: subDays(subMinutes(subSeconds(now, 54), 20), 2).getTime(),
		description: 'Cart add',
		ip: '84.234.243.42',
		method: 'GET',
		route: '/api/transactions/d65654e/add',
		status: 200,
	},
	{
		id: '5ece2d11e4060a97b2b57623',
		createdAt: subDays(subMinutes(subSeconds(now, 16), 34), 2).getTime(),
		description: 'Cart add',
		ip: '84.234.243.42',
		method: 'GET',
		route: '/api/transactions/c85727f/add',
		status: 200,
	},
	{
		id: '5ece2d16cf6d53d8e33656af',
		createdAt: subDays(subMinutes(subSeconds(now, 30), 54), 2).getTime(),
		description: 'View transaction',
		ip: '84.234.243.42',
		method: 'GET',
		route: '/api/transactions/c85727f',
		status: 200,
	},
	{
		id: '5ece2d1b2ec5071be9286a96',
		createdAt: subDays(subMinutes(subSeconds(now, 40), 56), 2).getTime(),
		description: 'Get transactions',
		ip: '84.234.243.42',
		method: 'GET',
		route: '/api/transactions',
		status: 200,
	},
	{
		id: '5ece2d22e68d5498917e47bc',
		createdAt: subDays(subMinutes(subSeconds(now, 5), 57), 2).getTime(),
		description: 'Login',
		ip: '84.234.243.42',
		method: 'POST',
		route: '/api/auth/login',
		status: 200,
	},
];
