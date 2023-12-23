import { createContext } from 'react';
import { SignInRequest, SignUpRequest } from 'src/api/auth';

import type { User } from 'src/types/user';

export interface State {
	isInitialized: boolean;
	isAuthenticated: boolean;
	user: User | null;
}

export const initialState: State = {
	isAuthenticated: false,
	isInitialized: false,
	user: null,
};

export interface AuthContextType extends State {
	signIn: ( request: SignInRequest ) => Promise<void>;
	signUp: ( request: SignUpRequest ) => Promise<void>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>( {
	...initialState,
	signIn: () => Promise.resolve(),
	signUp: () => Promise.resolve(),
	signOut: () => Promise.resolve(),
} );
