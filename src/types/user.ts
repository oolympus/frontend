export interface User {
	id: string;
	avatar?: string;
	email?: string;
	username?: string;

	[key: string]: any;
}
