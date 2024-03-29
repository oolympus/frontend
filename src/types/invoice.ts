interface InvoiceCustomer {
	address?: string;
	company?: string;
	email: string;
	name: string;
	taxId?: string;
}

interface InvoiceItem {
	id: string;
	currency: string;
	description: string;
	quantity: number;
	totalAmount: number;
	unitAmount: number;
}

export type InvoiceStatus = 'cancelled' | 'paid' | 'pending';

export interface Invoice {
	id: string;
	currency: string;
	customer: InvoiceCustomer;
	dueDate?: number;
	issueDate?: number;
	items?: InvoiceItem[];
	number: string;
	status: InvoiceStatus;
	subtotalAmount?: number;
	taxAmount?: number;
	totalAmount?: number;
}
