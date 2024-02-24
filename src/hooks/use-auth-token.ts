import { useState } from 'react';
import { Customer } from 'src/types/customer';

const TOKEN = 'accessToken';
const USER_STORAGE_KEY = 'user';

type User = Customer

const useLocalStorage = <T>( key: string, initialValue: T ): [T, ( value: T ) => void] => {
	const [storedValue, setStoredValue] = useState<T>( () => {
		const item = window.localStorage.getItem( key );
		if ( key === TOKEN ) return item
		return item ? JSON.parse( item ) : initialValue;
	} );

	const setValue = ( value: T ) => {
		setStoredValue( value );
		window.localStorage.setItem( key, JSON.stringify( value ) );
	};

	return [storedValue, setValue];
};

export const useAuthToken = () => {
	const [token, setToken] = useLocalStorage<string | null>( TOKEN, null );
	const [user, setUser] = useLocalStorage<User | null>( USER_STORAGE_KEY, null );

	return { token, user, setToken, setUser };
};
