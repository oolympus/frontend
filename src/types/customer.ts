export interface Customer { // This is the real deal
	id: string;
	last_login?: any;
	email: string;
	first_name: string;
	surname: string;
	username?: any;
	telephone: string;
	address?: any;
	gender?: any;
	date_of_birth?: any;
	roles: string;
	financial_information?: any;
	guarantors?: any;
	password_reset: boolean;
	password_reset_time?: any;
	wrong_password_entry_count: number;
	added_by?: any;
	date_joined: string;
	is_active: boolean;
	is_deleted: boolean;
	edited_at: string;
	is_previously_logged_in: boolean;
	credit_score: number;
}

export interface CustomerLog {
	id: string;
	createdAt: number;
	description: string;
	ip: string;
	method: string;
	route: string;
	status: number;
}

export interface CustomerEmail {
	id: string;
	description: string;
	createdAt: number;
}

export interface CustomerInvoice {
	id: string;
	issueDate: number;
	status: string;
	amount: number;
}
