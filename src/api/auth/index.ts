import type { User } from 'src/types/user';
import { JWT_EXPIRES_IN, JWT_SECRET, sign } from 'src/utils/jwt';
import { wait } from 'src/utils/wait';

import { users } from './data';

const STORAGE_KEY = 'users';

// NOTE: We use sessionStorage since memory storage is lost after page reload.
//  This should be replaced with a server call that returns DB persisted data.

const getPersistedUsers = (): User[] => {
	try {
		const data = sessionStorage.getItem( STORAGE_KEY );

		if ( !data ) {
			return [];
		}

		return JSON.parse( data ) as User[];
	} catch ( err ) {
		console.error( err );
		return [];
	}
};

const persistUser = ( user: User ): void => {
	try {
		const users = getPersistedUsers();
		const data = JSON.stringify( [...users, user] );
		sessionStorage.setItem( STORAGE_KEY, data );
	} catch ( err ) {
		console.error( err );
	}
};

export type SignInRequest = {
	username: string;
	password: string;
};

type SignInResponse = Promise<{
	accessToken: string;
}>;

export type SignUpRequest = {
	email: string;
	first_name: string;
	surname: string;
	telephone: string;
	address: string;
	gender: 'M' | 'F';
};

type SignUpResponse = Promise<{
	accessToken: string;
}>;

type MeRequest = {
	accessToken: string;
};

type MeResponse = Promise<User>;

class AuthApi {
	async signIn( request: SignInRequest ): SignInResponse {
		const { username, password } = request;

		await wait( 500 );

		return new Promise( ( resolve, reject ) => {
			try {
				// Create the access token
				const accessToken = sign( { userId: 'this is an id' }, JWT_SECRET, {
					expiresIn: JWT_EXPIRES_IN,
				} );

				resolve( { accessToken } );
			} catch ( err ) {
				console.error( '[Auth Api]: ', err );
				reject( new Error( 'Internal server error' ) );
			}
		} );
	}

	async signUp( request: SignUpRequest ): SignUpResponse {
		await wait( 1000 );

		return new Promise( ( resolve, reject ) => {
			try {
				const accessToken = sign( { userId: 'this is an id' }, JWT_SECRET, {
					expiresIn: JWT_EXPIRES_IN,
				} );
				resolve( { accessToken } );
				console.log( request );
			} catch ( err ) {
				console.error( '[Auth Api]: ', err );
				reject( new Error( 'Internal server error' ) );
			}
		} );
	}

	// async me( request: MeRequest ): MeResponse {
	// 	const { accessToken } = request;
	// 	await wait( 1000 );

	// 	return new Promise( ( resolve, reject ) => {
	// 		try {
	// 			resolve( {
	// 				username: 'ianbalijawa',
	// 				id: 'ianbalijawa',
	// 				email: 'ianbalijawa@gmail.com',
	// 				avatar: '',
	// 			} );
	// 		} catch ( err ) {
	// 			console.error( '[Auth Api]: ', err );
	// 			reject( new Error( 'Internal server error' ) );
	// 		}
	// 	} );
	// }
}

export const authApi = new AuthApi();
